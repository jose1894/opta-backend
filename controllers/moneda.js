const { response } = require("express");
const Moneda  = require('../models/moneda')

// obtenerPaiss - paginado - total - populate

const monedasGet = async ( req, res = response) => {
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
        const [ total, monedas ] = await Promise.all([
            Moneda.countDocuments( query ),
            Moneda.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, monedas, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las monedas ${ error }`
        })
    }

}

const monedasGetDelete = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'nombre', 
            sortDesc = true 
        } = req.query;

        let options = { $or:[ {'estado':2}]};        
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
        const [ total, monedas ] = await Promise.all([
            Moneda.countDocuments( query ),
            Moneda.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, monedas, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las monedas ${ error }`
        })
    }

}

// obtenerPais - populate {}
const monedaGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const moneda = await Moneda.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            moneda
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las monedas ${ error }`
        })
    }
}

const allMonedasGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}, {'estado':2}]}; 
        query = {...options}
        const monedas = await Moneda.find(query)
        res.send({ monedas })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las monedas ${ query }`
        })
    }
}

const monedaPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo} = req.body

        const monedaDB = await Moneda.findOne( { $or : [ { nombre}, { codigo} ] } )

        if ( monedaDB ) {
            return res.status( 400 ).json({
                msg: (monedaDB.nombre === nombre.toUpperCase()) ? `La moneda ${ monedaDB.nombre } ya existe` : 
                                       `El codigo ${ monedaDB.codigo } ya existe`,
                data: monedaDB
            })
        }

        const data = {
            nombre,
            codigo,
            usuario: req.usuario._id
        }

        const moneda = new Moneda( data )

        //Guardar en DB
        await moneda.save()

        return res.status( 201 ).json(moneda)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar una moneda ${ error }`
            })

    }
} 

// actualizarPais 
const monedaPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 

        const moneda = await Moneda.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            moneda
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }
}

// borrarPais - status : false
const monedaDelete = async ( req, res = response ) => {

    const { id } = req.params
    const moneda = await Moneda.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( moneda )
}

// restaurarPais - status : true
const monedaRestore = async ( req, res = response ) => {

    const { id } = req.params
    const moneda = await Moneda.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true})

    if(!moneda){
        return res.json(`La moneda solicitada no se encuentra eliminada`)
    }

    res.json( moneda )
}

module.exports = {
    monedaPost,
    monedasGet,
    monedaGet,
    monedaPut,
    monedaDelete,
    monedaRestore,
    allMonedasGet,
    monedasGetDelete
}