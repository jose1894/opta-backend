const { response } = require("express");
const Personal = require('../models/personal')
const { filtrarPorPropiedades } = require("../helpers/filter-search")

const personastGet = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            estado = -1,
            sortBy = 'nombres',
            sortDesc = true
        } = req.query;
        let jsonQ = (q) ? JSON.parse(q) : {}
        let options = estado === -1 ? { $or: [{ 'estado': 1 }, { 'estado': 0 }] } : { $or: [{ 'estado': estado }] };
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;

        query = { ...options }

        // Promise . all envia varias promesas simultaneas
        let [total, personas] = await Promise.all([
            Personal.countDocuments(query),
            Personal.find(query)
                .populate('profesion')
                .populate('idiomas')
                .populate('unidadNegocio')
                .populate('categoria')
                .populate('sucursal')
                .populate('perfil')
                .populate('miembro')
                .populate('usuario')
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])
        
        if(q) {
            const keys = jsonQ?.filters
            const searchText = jsonQ.search 
            const personasFilter =  filtrarPorPropiedades(keys, personas, searchText);
            personas = personasFilter
            total = personasFilter.length
        } 

        res.send({ total, personas, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${error}`
        })
    }

}

const personasGetDeleted = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            sortBy = 'codigo',
            sortDesc = true,
        } = req.query;

        let options = { $or: [{ 'estado': 2 }] };
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;

        if (q) {
            filter = functionFiltrar(q);
            query = {
                ...filter,
                '$and': [
                    options
                ]
            }
        } else {
            query = { ...options }
        }

        // Promise . all envia varias promesas simultaneas
        let [total, personas] = await Promise.all([
            Personal.countDocuments(query),
            Personal.find(query)
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])

        if(q) {
            const keys = jsonQ?.filters
            const searchText = jsonQ.search 
            const personasFilter =  filtrarPorPropiedades(keys, personas, searchText);
            personas = personasFilter
            total = personasFilter.length
        } 

        res.send({ total, personas, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${error}`
        })
    }

}

// obtenerPais - populate {}
const personaGet = async (req, res = response) => {

    try {

        const { id } = req.params

        const persona = await Personal.findById(id)
            .populate('profesion')
            .populate('idiomas')
            .populate('unidadNegocio')
            .populate('categoria')
            .populate('sucursal')
            .populate('perfil')
            .populate('miembro')
            .populate('usuario')

        return res.status(200).send(
            persona
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${error}`
        })
    }
}

const allPersonaGet = async (req, res = response) => {

    try {
        let options = { $or: [{ 'estado': 1 }/*, {'estado':0}*/] };
        query = { ...options }
        const personas = await Personal.find(query)
        res.send({ personas })
    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${query}`
        })
    }
}

const buscarPersonaGet = async (req, res = response) => {


    try {
        let nombreApellido = req.params.query;
        const personas = await Personal.find({
            $and: [
                {
                  $or: [
                    { nombres: { $regex: nombreApellido, $options: 'i' } },
                    { apellidos: { $regex: nombreApellido, $options: 'i' } },
                  ],
                },
                { tipoPersonal: 0 },
                { estado: 1 },
              ],
        });
        res.send({ personas })
    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas`
        })
    }
}

const getListTipoPersonal = async (req, res = response) => {

    try {
        const { tipoPersonal } = req.params
        let options = { $or: [{ 'estado': 1 }/*, {'estado':0}*/] };
        //query = {...options}
        let filter = { 'tipoPersonal': tipoPersonal }
        query = {
            ...filter,
            '$and': [
                options
            ]
        }
        const personas = await Personal.find(query)
        res.send({ personas })
    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${query}`
        })
    }
}


const personaPost = async (req, res = response) => {


    try {
        const {
            nombres,
            apellidos,
            iDFiscal,
            telefono,
            email,
            direccion,
            profesion,
            idiomas,
            postgrado,
            unidadNegocio,
            categoria,
            sucursal,
            perfil,
            usuarioAcceso,
            claveAcceso,
            tipoPersonal,
            estado } = req.body

        const personaDB = await Personal.findOne({ iDFiscal })

        if (personaDB) {
            return res.status(400).json({
                msg: `El registro ${personaDB.iDFiscal} ya existe`,
                data: personaDB
            })
        }

        const data = {
            nombres,
            apellidos,
            iDFiscal,
            telefono,
            email,
            direccion,
            profesion,
            idiomas,
            postgrado,
            unidadNegocio,
            categoria,
            sucursal,
            perfil,
            usuarioAcceso,
            claveAcceso,
            miembro: req.usuario.membresia._id,
            usuario: req.usuario._id,
            tipoPersonal,
            estado
        }

        const personal = new Personal(data)

        //Guardar en DB
        await personal.save()

        return res.status(201).json(personal)

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al guardar el personal ${error}`
        })

    }
}

// actualizarPais 
const personaPut = async (req, res = response) => {

    try {

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombres = data.nombres.toUpperCase()
        data.apellidos = data.apellidos.toUpperCase()
        data.usuario = req.usuario._id
        data.miembro = req.usuario.membresia._id

        const persona = await Personal.findByIdAndUpdate(id, data, { new: true })

        return res.status(200).send(
            persona
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${error}`
        })
    }
}

// borrarPais - status : false
const personaDelete = async (req, res = response) => {

    const { id } = req.params
    const persona = await Personal.findByIdAndUpdate(id, { estado: 2 }, { new: true })

    res.json(persona)
}

// restaurarPais - status : true
const personaRestore = async (req, res = response) => {

    const { id } = req.params
    const persona = await Personal.findByIdAndUpdate(id, { estado: true }, { new: true })

    if (!persona) {
        return res.json(`La persona solicitado no se encuentra eliminado`)
    }

    res.json(persona)
}

module.exports = {
    personastGet,
    personasGetDeleted,
    personaGet,
    allPersonaGet,
    personaPut,
    personaDelete,
    personaRestore,
    personaPost,
    getListTipoPersonal,
    buscarPersonaGet
}