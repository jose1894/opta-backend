const { response } = require("express");
const Cargo  = require('../models/cargo')

// obtenerPaiss - paginado - total - populate

const cargosGet = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'nombre', 
            sortDesc = true 
        } = req.query;

        let options = { $or:[ {'estado':1}, {'estado':2}]};        
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
        const [ total, cargos ] = await Promise.all([
            Cargo.countDocuments( query ),
            Cargo.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, cargos, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }

}

// obtenerPais - populate {}
const cargoGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const cargo = await Cargo.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            cargo
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }
}

const allCargosGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}, {'estado':2}]}; 
        query = {...options}
        const { id } = req.params
        const cargos = await Cargo.find(query)
        //const { cargos } = listCargos.data
        res.send({ cargos })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ query }`
        })
    }
}

const cargosPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo} = req.body

        const cargoDB = await Cargo.findOne( { nombre } )

        if ( cargoDB ) {
            return res.status( 400 ).json({
                msg: `El cargo ${ cargoDB.nombre } ya existe`
            })
        }

        const data = {
            nombre,
            codigo,
            usuario: req.usuario._id
        }

        const cargo = new Cargo( data )

        //Guardar en DB
        await cargo.save()

        return res.status( 201 ).json(cargo)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un cargo ${ error }`
            })

    }
} 

// actualizarPais 
const cargoPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 

        const cargo = await Cargo.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            cargo
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }
}

// borrarPais - status : false
const cargoDelete = async ( req, res = response ) => {

    const { id } = req.params
    const cargo = await Cargo.findByIdAndUpdate( id, { status: false}, { new: true})

    res.json( cargo )
}

// restaurarPais - status : true
const cargoRestore = async ( req, res = response ) => {

    const { id } = req.params
    const cargo = await Cargo.findOneAndUpdate( {id, status: false}, { status: true}, { new: true})

    if(!cargo){
        return res.json(`El cargo solicitado no se encuentra eliminado`)
    }

    res.json( cargo )
}

module.exports = {
    cargosPost,
    cargosGet,
    cargoGet,
    cargoPut,
    cargoDelete,
    cargoRestore,
    allCargosGet
}