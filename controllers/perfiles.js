const { response } = require("express");
const Perfil  = require('../models/perfil')

// obtenerPaiss - paginado - total - populate

const perfilesGet = async ( req, res = response) => {
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
        const [ total, perfiles ] = await Promise.all([
            Perfil.countDocuments( query ),
            Perfil.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, perfiles, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los perfiles ${ error }`
        })
    }

}

const perfilesGetDeleted = async ( req, res = response) => {
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
        const [ total, perfiles ] = await Promise.all([
            Perfil.countDocuments( query ),
            Perfil.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, perfiles, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los perfiles ${ error }`
        })
    }

}

// obtenerPais - populate {}
const perfilGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const perfil = await Perfil.findById( id ).populate( 'usuario' ).populate( 'accionesPerfil' )

        return res.status(200).send(
            perfil
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el perfil ${ error }`
        })
    }
}

const allPerfilesGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const perfiles = await Perfil.find(query)
        res.send({ perfiles })
    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los perfiles ${ query }`
        })
    }
}

const perfilPost = async ( req, res = response ) => {
    try {
        const { descripcion,codigo, estado, menu, accionesPerfil } = req.body

        const perfilDB = await Perfil.findOne( { $or : [ { descripcion}, { codigo} ] } )

        if ( perfilDB ) {
            return res.status( 400 ).json({
                msg: (perfilDB.descripcion === descripcion.toUpperCase()) ? `El perfil ${ perfilDB.descripcion } ya existe` : 
                                       `El codigo ${ perfilDB.codigo } ya existe`,
                data: perfilDB
            })
        }

        const data = {
            descripcion,
            codigo,            
            estado,
            menu,
            accionesPerfil,
            usuario: req.usuario._id
        }

        const perfil = new Perfil( data )

        //Guardar en DB
        await perfil.save()

        return res.status( 201 ).json(perfil)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar el perfil ${ error }`
            })

    }
} 

// actualizarPais 
const perfilPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.descripcion = data.descripcion.toUpperCase()
        data.usuario = req.usuario._id 

        const perfil = await Perfil.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            perfil
        )

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el perfil ${ error }`
        })
    }
}

// borrarPais - status : false
const perfilDelete = async ( req, res = response ) => {

    const { id } = req.params
    const perfil = await Perfil.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( perfil )
}

// restaurarPais - status : true
const perfilRestore = async ( req, res = response ) => {

    const { id } = req.params
    const perfil = await Perfil.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true})

    if(!accionPerfil){
        return res.json(`La accion de perfil solicitado no se encuentra eliminada`)
    }

    res.json( accionPerfil )
}

module.exports = {
    perfilPost,
    perfilesGet,
    perfilGet,
    perfilPut,
    perfilDelete,
    perfilRestore,
    allPerfilesGet,
    perfilesGetDeleted
}