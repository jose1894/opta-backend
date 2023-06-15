const { response } = require("express");
const AccionPerfil  = require('../models/accionPerfil')

// obtenerPaiss - paginado - total - populate

const accionesPerfilesGet = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'nombre', 
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
        const [ total, accionesPerfiles ] = await Promise.all([
            AccionPerfil.countDocuments( query ),
            AccionPerfil.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, accionesPerfiles, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar llas accioes de perfil ${ error }`
        })
    }

}

const accionesPerfilesGetDeleted = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'nombre', 
            sortDesc = true, 
        } = req.query;

        let options = { $or:[ {'estado': 2}]};        
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
        const [ total, accionesPerfiles ] = await Promise.all([
            AccionPerfil.countDocuments( query ),
            AccionPerfil.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, accionesPerfiles, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }

}

// obtenerPais - populate {}
const accionPerfilGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const accionPerfil = await AccionPerfil.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            accionPerfil
        )

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la accion de perfil ${ error }`
        })
    }
}

const allAccionesPerfilesGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const accionesPerfiles = await AccionPerfil.find(query)
        res.send({ accionesPerfiles })
    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las acciones de perfiles ${ query }`
        })
    }
}

const accionPerfilPost = async ( req, res = response ) => {
    try {
        const {descripcion,codigo, estado} = req.body

        const accionPerfilDB = await AccionPerfil.findOne( { $or : [ { descripcion}, { codigo} ] } )

        if ( accionPerfilDB ) {
            return res.status( 400 ).json({
                msg: (accionPerfilDB.descripcion === descripcion.toUpperCase()) ? `La accion perfil ${ accionPerfilDB.descripcion } ya existe` : 
                                       `El codigo ${ accionPerfilDB.codigo } ya existe`,
                data: accionPerfilDB
            })
        }

        const data = {
            descripcion,
            codigo,
            usuario: req.usuario._id,
            estado
        }

        const accionPerfil = new AccionPerfil( data )

        //Guardar en DB
        await accionPerfil.save()

        return res.status( 201 ).json(accionPerfil)

    } catch ( error ) {

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar la accion de perfil ${ error }`
            })

    }
} 

// actualizarPais 
const accionPerfilPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.descripcion = data.descripcion.toUpperCase()
        data.usuario = req.usuario._id 

        const accionPerfil = await AccionPerfil.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            accionPerfil
        )

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la accion de perfil ${ error }`
        })
    }
}

// borrarPais - status : false
const accionPerfilDelete = async ( req, res = response ) => {

    const { id } = req.params
    const accionPerfil = await AccionPerfil.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( accionPerfil )
}

// restaurarPais - status : true
const accionPerfilRestore = async ( req, res = response ) => {

    const { id } = req.params
    const accionPerfil = await AccionPerfil.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true})

    if(!accionPerfil){
        return res.json(`La accion de perfil solicitado no se encuentra eliminada`)
    }

    res.json( accionPerfil )
}

module.exports = {
    accionPerfilPost,
    accionesPerfilesGet,
    accionPerfilGet,
    accionPerfilPut,
    accionPerfilDelete,
    accionPerfilRestore,
    allAccionesPerfilesGet,
    accionesPerfilesGetDeleted
}