const { response } = require("express");
const UnidadNegocio  = require('../models/unidadNegocio')

const unidadesNegocioGet = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
            sortDesc = true 
        } = req.query;

        let options = { $or:[ {'estado':1}, {'estado':0}]};        
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;
        
        if ( q ){
            filter = functionFiltrar( q );
            query = {
                ...filter,
                '$and': [
                    options
                ]
            }
        } else {
            query = {...options}
        }
         
        // Promise . all envia varias promesas simultaneas
        const [ total, unidadesNegocio ] = await Promise.all([
            UnidadNegocio.countDocuments( query ),
            UnidadNegocio.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, unidadesNegocio, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las unidades de negocios ${ error }`
        })
    }

}

const unidadesNegocioGetDelete = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
            sortDesc = true 
        } = req.query;

        let options = { $or:[{'estado':2}]};        
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;
        
        if ( q ){
            filter = functionFiltrar( q );
            query = {
                ...filter,
                '$and': [
                    options
                ]
            }
        } else {
            query = {...options}
        }
         
        // Promise . all envia varias promesas simultaneas
        const [ total, unidadesNegocio ] = await Promise.all([
            UnidadNegocio.countDocuments( query ),
            UnidadNegocio.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, unidadesNegocio, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las unidades de negocios ${ error }`
        })
    }

}



// obtenerEtado - populate {}
const unidadNegocioGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const unidadNegocio = await UnidadNegocio.findById( id ).populate( 'usuario')

        return res.status(200).send(
            unidadNegocio
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la unidad de negocio ${ error }`
        })
    }
}


const unidadNegocioPost = async ( req, res = response ) => {


    try {
        const {codigo, nombre, siglas,estado} = req.body

        const unidadNegocioDB = await UnidadNegocio.findOne( { $or : [ {nombre}, {codigo} ] } )

        if ( unidadNegocioDB ) {
            return res.status( 400 ).json({
                msg: (unidadNegocioDB.nombre === nombre.toUpperCase()) ? `La unidad de negocio ${ unidadNegocioDB.nombre } ya existe` : 
                `El codigo ${ unidadNegocioDB.codigo } ya existe`,
                data: unidadNegocioDB
            })
        }
        const data = {
            codigo, 
            nombre, 
            siglas,
            estado,
            usuario: req.usuario._id
        }

        const unidadNegocio = new UnidadNegocio( data )

        //Guardar en DB
        await unidadNegocio.save()

        return res.status( 201 ).json(unidadNegocio)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar una unidad de negocia ${ error }`
            })

    }
} 

// actualizarPais 
const unidadNegocioPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.siglas = data.siglas.toUpperCase()
        data.usuario = req.usuario._id 
        const unidadNegocio = await UnidadNegocio.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            unidadNegocio
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la unidad de negocio ${ error }`
        })
    }
}

// borrarPais - status : false
const unidadNegocioDelete = async ( req, res = response ) => {

    const { id } = req.params
    const unidadNegocio = await UnidadNegocio.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( unidadNegocio )
}

const allUnidadesNegocioGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':2}*/]}; 
        query = {...options}
        const unidadesNegocio = await UnidadNegocio.find(query)
        //const { cargos } = listCargos.data
        res.send({ unidadesNegocio })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las unidades de negocio ${ query }`
        })
    }
}

// restaurarPais - status : true
const unidadNegocioRestore = async ( req, res = response ) => {
    const { id } = req.params
    const unidadNegocio = await UnidadNegocio.findByIdAndUpdate( id, { estado: true}, { new: true});
    if(!unidadNegocio){
        return res.json(`La unidad de negocio solicitada no se encuentra eliminada`)
    }
    res.json( unidadNegocio )
}

module.exports = {
    unidadNegocioPost,
    unidadesNegocioGet,
    unidadNegocioGet,
    unidadNegocioPut,
    unidadNegocioDelete,
    unidadNegocioRestore,
    allUnidadesNegocioGet,
    unidadesNegocioGetDelete
}