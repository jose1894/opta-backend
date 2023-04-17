const { response } = require("express");
const Sucursal  = require('../models/sucursal')

const sucursalesGet = async ( req, res = response) => {
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
        const [ total, sucursales ] = await Promise.all([
            Sucursal.countDocuments( query ),
            Sucursal.find(query)
                    .populate('state')
                    .populate('ciudad')
                    .populate('pais')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, sucursales, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las sucursales ${ error }`
        })
    }

}

const sucursalesGetDelete = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'nombre', 
            sortDesc = true 
        } = req.query;

        let options = { $or:[ {'estado':2 }]};        
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
        const [ total, sucursales ] = await Promise.all([
            Sucursal.countDocuments( query ),
            Sucursal.find(query)
                    .populate('state')
                    .populate('ciudad')
                    .populate('pais')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, sucursales, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las sucursales ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const sucursalGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const sucursal = await Sucursal.findById( id ).populate( 'usuario').populate('state').populate('ciudad').populate('pais')

        return res.status(200).send(
            sucursal
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las sucursales ${ error }`
        })
    }
}


const sucursalPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo, pais, ciudad, estado, siglas, state } = req.body

        const sucursalDB = await Sucursal.findOne( { $or : [ { nombre}, { codigo} ] } )

        if ( sucursalDB ) {
            return res.status( 400 ).json({
                msg: (sucursalDB.nombre === nombre.toUpperCase()) ? `La sucursal ${ sucursalDB.nombre } ya existe` : 
                                       `El codigo ${ sucursalDB.codigo } ya existe`,
                data: sucursalDB
            })
        }
        const data = {
            nombre,
            codigo,            
            pais,
            ciudad,
            estado,
            siglas,
            state,
            usuario: req.usuario._id,
        }

        const sucursal = new Sucursal( data )

        //Guardar en DB
        await sucursal.save()

        return res.status( 201 ).json(sucursal)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar la sucursal ${ error }`
            })

    }
} 

// actualizarPais 
const sucursalPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.siglas = data.siglas.toUpperCase()
        data.usuario = req.usuario._id 
        const sucursal = await Sucursal.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            sucursal
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las sucursales ${ error }`
        })
    }
}

// borrarPais - status : false
const sucursalDelete = async ( req, res = response ) => {

    const { id } = req.params
    const sucursal = await Sucursal.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( sucursal )
}

const allSucursalesGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':2}*/]}; 
        query = {...options}
        const { id } = req.params
        const sucursales = await Sucursal.find(query)
        //const { cargos } = listCargos.data
        res.send({ sucursales })
    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las sucusrsales ${ query }`
        })
    }
}

// restaurarPais - status : true
const sucursalRestore = async ( req, res = response ) => {
    const { id } = req.params
    const sucursal = await Sucursal.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true});
    if(!sucursal){
        return res.json(`La sucursal solicitada no se encuentra eliminada`)
    }
    res.json( sucursal )
}

module.exports = {
    sucursalPost,
    sucursalesGet,
    sucursalGet,
    sucursalPut,
    sucursalDelete,
    sucursalRestore,
    allSucursalesGet,
    sucursalesGetDelete
}