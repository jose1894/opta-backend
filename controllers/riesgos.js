const { response } = require("express");
const Riesgo = require('../models/riesgo')


const riesgosGet = async (req, res = response) => {
    try {
        const {
            q = '',
            q2 = '',
            q3 = '',
            pageRisk = 0,
            perPage = 3,
            sortBy = 'codigo',
            sortDesc = true
        } = req.query;

        let options = { $or: [{ 'estado': 1 }, { 'estado': 0 }] };
        const sort = {}
        const skip = parseInt(pageRisk) === 0 || parseInt(pageRisk) === 1 ? 0 : (parseInt(pageRisk) - 1) * parseInt(perPage);

        let filter = {}
        let query = {}
        
        sort[sortBy] = (sortDesc === "false") ? -1 : 1;

        if (q2 || q3) {
            if(q3 && q3.length > 0) {
                const qparam = (typeof q3[0] === "string") ? JSON.parse(q3[0]) : q3[0]
                let p = {}
                p.$or = [qparam]                
                filter = p
            } else {
                filter = functionFiltrar(q2);
            }        
            query = {
                ...filter,
                '$and': [
                    options
                ]
            }
        } else {
            query = { ...options }
        }
        let [total, riesgos] = await Promise.all([
            Riesgo.countDocuments(query),
            Riesgo.find(query)
                .populate('proyecto')
                .populate('indice')
                .populate('usuario')
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])


        let jsonQ = q
        if (typeof q === "string") {
            jsonQ = (q) ? JSON.parse(q) : {}
        }
        const codeProject = (typeof jsonQ[0] === 'string') ? JSON.parse(jsonQ[0]).projectId : jsonQ[0].projectId
        const dataN = riesgos.filter((item) => item.proyecto.codigo === codeProject && item.indice.rcr === 1)
        riesgos = dataN
        total = dataN.length

        res.send({ total, riesgos, perPage: parseInt(perPage), pageRisk: parseInt(pageRisk) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los riesgos ${error}`
        })
    }

}

const functionFiltrar = (q) => {
    const filter = {};
    if (q && q.length > 0) {
        const orFilters = q.map(item => {
            const data = (typeof item === 'string') ? JSON.parse(item) : item
            const { cuadrante } = data
            const cuadranteFilter = cuadrante ? { cuadrante } : {};
            return { ...cuadranteFilter };
        });       
        filter.$or = orFilters;
    }
    return filter;
}

const riesgoGet = async (req, res = response) => {

    try {

        const { id } = req.params

        const riesgo = await Riesgo.findById(id).populate('proyecto').populate('usuario')

        return res.status(200).send(
            riesgo
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los riesgos ${error}`
        })
    }
}

const riesgoPost = async (req, res = response) => {


    try {
        const { proyecto, titulo, descripcion, indice, estado } = req.body

        /*const paisDB = await Pais.findOne( { $or : [ { titulo}, { codigo} ] } )

        if ( paisDB ) {
            return res.status( 400 ).json({
                msg: (paisDB.nombre === nombre.toUpperCase()) ? `El pais ${ paisDB.nombre } ya existe` : 
                                       `El codigo ${ paisDB.codigo } ya existe`,
                data: paisDB
            })
        }*/
        // const projectId = ObjectId(proyecto.trim())
        const data = {
            proyecto,
            titulo,
            descripcion,
            indice,
            estado,
            usuario: req.usuario._id
        }

        const riesgo = new Riesgo(data)

        //Guardar en DB
        await riesgo.save()

        return res.status(201).json(riesgo)

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al guardar el riesgo ${error}`
        })

    }
}

const riesgoPut = async (req, res = response) => {

    try {

        const { id } = req.params

        const { usuario, fecha, ...data } = req.body

        data.titulo = data.titulo.toUpperCase()
        data.usuario = req.usuario._id

        const riesgo = await Riesgo.findByIdAndUpdate(id, data, { new: true })

        return res.status(200).send(
            riesgo
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al modificar el riesgo ${error}`
        })
    }
}


const riesgoDelete = async (req, res = response) => {

    const { id } = req.params
    const riesgo = await Riesgo.findByIdAndUpdate(id, { estado: 2 }, { new: true })

    res.json(riesgo)
}


const riesgoRestore = async (req, res = response) => {

    const { id } = req.params
    const riesgo = await Riesgo.findByIdAndUpdate(id, { estado: 1 }, { new: true })

    if (!riesgo) {
        return res.json(`El riesgo solicitado no se encuentra eliminado`)
    }

    res.json(riesgo)
}

module.exports = {
    riesgosGet,
    riesgoGet,
    riesgoPost,
    riesgoPut,
    riesgoDelete,
    riesgoRestore
}