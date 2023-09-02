const { response } = require("express");
const Actividad  = require('../models/actividad')

// obtenerPaiss - paginado - total - populate

const actividadesGet = async ( req, res = response) => {
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

        const [ total, actividades ] = await Promise.all([
            Actividad.countDocuments( query ),
            Actividad.find(query).populate( 'unidadNegocio' )
                     .skip( skip )
                     .sort(sort) 
                     .limit( perPage )
        ])

        res.send({ total, actividades, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las actividades ${ error }`
        })
    }

}

const actividadesGetDeleted = async ( req, res = response) => {
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
        const [ total, actividades ] = await Promise.all([
            Actividad.countDocuments( query ),
            Actividad.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, actividades, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las actividades ${ error }`
        })
    }

}

// obtenerPais - populate {}
const actividadGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const actividad = await Actividad.findById( id ).populate( 'miembro' ).populate( 'unidadNegocio' ).populate( 'usuario' )

        return res.status(200).send(
            actividad
        )

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la actividad ${ error }`
        })
    }
}

const allActividadesGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const actividades = await Actividad.find(query)
        res.send({ actividades })
    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las actividades ${ query }`
        })
    }
}

const actividadPost = async ( req, res = response ) => {


    try {
        const {unidadNegocio,siglas,nombre, cargable,  estado} = req.body

        const actividadDB = await Actividad.findOne( { $or : [ { nombre}, { siglas } ] } )

        if ( actividadDB ) {
            return res.status( 400 ).json({
                msg: (actividadDB.nombre === nombre.toUpperCase()) ? `La actividad ${ actividadDB.nombre } ya existe` : 
                                       `La actividad ${ actividadDB.siglas } ya existe`,
                data: actividadDB
            })
        }

        const data = {
            unidadNegocio,
            siglas,
            nombre,
            cargable,
            miembro: req.usuario.membresia._id,
            usuario: req.usuario._id,
            estado
        }

        const actividad = new Actividad( data )

        //Guardar en DB
        await actividad.save()

        return res.status( 201 ).json(actividad)

    } catch ( error ) {
            return res.status( 500 ).json({
                msg: `Error del servidor al guardar una actividad ${ error }`
            })

    }
} 

// actualizarPais 
const actividadPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body
        

        data.nombre = data.nombre.toUpperCase()
        data.siglas = data.siglas.toUpperCase()
        data.usuario = req.usuario._id 
        data.miembro = req.usuario.membresia._id

        const actividad = await Actividad.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            actividad
        )

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al modificar la actividad ${ error }`
        })
    }
}

// borrarPais - status : false
const actividadDelete = async ( req, res = response ) => {

    const { id } = req.params
    const actividad = await Actividad.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( actividad )
}

// restaurarPais - status : true
const actividadRestore = async ( req, res = response ) => {

    const { id } = req.params
    const actividad = await Actividad.findByIdAndUpdate( id, { estado: true}, { new: true})

    if(!actividad){
        return res.json(`La actividad solicitada no se encuentra eliminada`)
    }

    res.json( actividad )
}

module.exports = {
    actividadPost,
    actividadesGet,
    actividadGet,
    actividadPut,
    actividadDelete,
    actividadRestore,
    allActividadesGet,
    actividadesGetDeleted
}