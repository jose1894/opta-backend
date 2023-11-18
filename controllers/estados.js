const { response } = require("express");
const Estado  = require('../models/estado')

const estadosGet = async ( req, res = response) => {
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
        const [ total, estados ] = await Promise.all([
            Estado.countDocuments( query ),
            Estado.find(query)
                    .populate( 'pais' )
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, estados, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los estados ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const estadoGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const estado = await Estado.findById( id ).populate( 'usuario').populate('pais')

        return res.status(200).send(
            estado
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los estados ${ error }`
        })
    }
}


const estadosPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo, pais} = req.body

        const estadoDB = await Estado.findOne( { $or : [ { nombre}, { codigo} ] } )

        if ( estadoDB ) {
            return res.status( 400 ).json({
                msg: (estadoDB.nombre === nombre.toUpperCase()) ? `El estado ${ estadoDB.nombre } ya existe` : 
                                       `El codigo ${ estadoDB.codigo } ya existe`,
                data: estadoDB
            })
        }
        const data = {
            nombre,           
            pais,
            estado: req.body.estado,
            usuario: req.usuario._id,
        }

        const estado = new Estado( data )

        //Guardar en DB
        await estado.save()

        return res.status( 201 ).json(estado)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un estado ${ error }`
            })

    }
} 

// actualizarPais 
const estadoPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 
        data.pais = data.pais

        const estado = await Estado.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            estado
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los estados ${ error }`
        })
    }
}

// borrarPais - status : false
const estadoDelete = async ( req, res = response ) => {

    const { id } = req.params
    const estado = await Estado.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( estado )
}

const estdosGetDeleteOrInactive = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
            sortDesc = true,
            estado = 2,
        } = req.query;

        let options = { $or:[ {'estado': estado}]};        
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
        const [ total, estados ] = await Promise.all([
            Estado.countDocuments( query ),
            Estado.find(query)
                    .populate( 'pais' )
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])
        
        res.send({ total, estados, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los estados ${ error }`
        })
    }

}


// obtenerEtado - populate {}
const estadosByPaisGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const estadosList = await Estado.find(query).populate({ path: 'pais', match: { '_id': id }})
        const estados = estadosList.filter(estado => estado.pais)
        res.send({ estados })
    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los estados ${ query }`
        })
    }
}

// restaurarEstado - status : true
const estadoRestore = async ( req, res = response ) => {

    const { id } = req.params
    const estado = await Estado.findByIdAndUpdate( id, { estado: 1}, { new: true})

    if(!estado){
        return res.json(`El estado solicitado no se encuentra eliminado`)
    }

    return res.json( estado )
}

module.exports = {
    estadosPost,
    estadosGet,
    estadoGet,
    estadoPut,
    estadoDelete,
    estadosByPaisGet,
    estadoRestore,
    estdosGetDeleteOrInactive
}