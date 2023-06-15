const { response } = require("express");
const Profesion  = require('../models/profesion')

// obtenerPaiss - paginado - total - populate

const profesionesGet = async ( req, res = response) => {
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
        const [ total, profesiones ] = await Promise.all([
            Profesion.countDocuments( query ),
            Profesion.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, profesiones, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las profesiones ${ error }`
        })
    }

}

const profesionesGetDeleted = async ( req, res = response) => {
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
        const [ total, profesiones ] = await Promise.all([
            Profesion.countDocuments( query ),
            Profesion.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, profesiones, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las profesiones ${ error }`
        })
    }

}

// obtenerPais - populate {}
const profesionGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const profesion = await Profesion.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            profesion
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la profesion ${ error }`
        })
    }
}

const allProfesionesGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const profesiones = await Profesion.find(query)
        //const { cargos } = listCargos.data
        res.send({ profesiones })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las profesiones ${ query }`
        })
    }
}

const profesionPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo, estado} = req.body

        const profesionDB = await Profesion.findOne( { $or : [ { nombre}, { codigo} ] } )

        if ( profesionDB ) {
            return res.status( 400 ).json({
                msg: (profesionDB.nombre === nombre.toUpperCase()) ? `El cargo ${ profesionDB.nombre } ya existe` : 
                                       `El registro ${ profesionDB.codigo } ya existe`,
                data: profesionDB
            })
        }

        const data = {
            nombre,
            codigo,
            usuario: req.usuario._id,
            estado
        }

        const profesion = new Profesion( data )

        //Guardar en DB
        await profesion.save()

        return res.status( 201 ).json(profesion)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar una profesion ${ error }`
            })

    }
} 

// actualizarPais 
const profesionPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 

        const profesion = await Profesion.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            profesion
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al actualizar la profesion ${ error }`
        })
    }
}

// borrarPais - status : false
const profesionDelete = async ( req, res = response ) => {

    const { id } = req.params
    const profesion = await Profesion.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( profesion )
}

// restaurarPais - status : true
const profesionRestore = async ( req, res = response ) => {

    const { id } = req.params
    const profesion = await Profesion.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true})

    if(!profesion){
        return res.json(`La profesion solicitada no se encuentra eliminada`)
    }

    res.json( profesion )
}

module.exports = {
    profesionPost,
    profesionesGet,
    profesionGet,
    profesionPut,
    profesionDelete,
    profesionRestore,
    allProfesionesGet,
    profesionesGetDeleted
}