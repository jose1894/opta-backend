const { response } = require("express");
const Cliente  = require('../models/cliente')

const clientesGet = async ( req, res = response) => {
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
        const [ total, clientes ] = await Promise.all([
            Cliente.countDocuments( query ),
            Cliente.find(query)
                    .populate('industria')
                    .populate('miembro')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, clientes, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ error }`
        })
    }

}

const clientesGetDeleted = async ( req, res = response) => {
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
        const [ total, clientes ] = await Promise.all([
            Cliente.countDocuments( query ),
            Cliente.find(query)
                    .populate('industria')
                    .populate('pais')
                    .populate('estado')
                    .populate('ciudad')
                    .populate('miembro')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, clientes, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const clienteGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        let cliente = await Cliente.findById( id )
                                   .populate( 'usuario')
                                   .populate('industria')
                                   .populate('pais')
                                   .populate('estado')
                                   .populate('ciudad')
                                   .populate('miembro')
        return res.status(200).send(
            cliente
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el cliente ${ error }`
        })
    }
}


const clientePost = async ( req, res = response ) => {


    try {
        const {codigo, nombre, iDFiscal, industria, companiaListada, companiaRegulada, casaMatriz, pais, state, ciudad, calle, paginaWeb, direccion, miembro, estado} = req.body

        const clientedDB = await Cliente.findOne({ iDFiscal} )

        if ( clientedDB ) {
            return res.status( 400 ).json({
                msg: `El id fiscal ${clientedDB.iDFiscal} ya existe`,
                data: clientedDB 
            })
        }
        const data = {
            codigo, 
            nombre, 
            iDFiscal, 
            industria, 
            companiaListada, 
            companiaRegulada, 
            casaMatriz, 
            pais, 
            state, 
            ciudad, 
            calle, 
            paginaWeb, 
            direccion, 
            miembro, 
            estado,
            usuario: req.usuario._id
        }
        console.log( data )
        const cliente = new Cliente( data )

        //Guardar en DB
        await cliente.save()

        return res.status( 201 ).json(cliente)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un cliente ${ error }`
            })

    }
} 

// actualizarPais 
const clientePut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        //data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 
        const cliente = await Cliente.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            cliente
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ error }`
        })
    }
}

// borrarPais - status : false
const clienteDelete = async ( req, res = response ) => {

    const { id } = req.params
    const cliente = await Cliente.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( cliente )
}

const allClientesGet = async ( req, res = response ) => {

    try{
    let options = { $or:[ {'estado':1}/*, {'estado':2}*/]}; 
        query = {...options}
        const { id } = req.params
        const cliente = await Cliente.find(query)
        //const { cargos } = listCargos.data
        res.send({ cliente })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ query }`
        })
    }
}

// restaurarPais - status : true
const clienteRestore = async ( req, res = response ) => {
    const { id } = req.params
    const cliente = await Cliente.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true});
    if(!miembro){
        return res.json(`El cliente solicitado no se encuentra eliminado`)
    }
    res.json( cliente )
}

module.exports = {
    clientePost,
    clientesGet,
    clienteGet,
    clientePut,
    clienteDelete,
    clienteRestore,
    allClientesGet,
    clientesGetDeleted
}