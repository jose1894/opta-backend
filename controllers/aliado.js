const { response } = require("express");
const Aliado  = require('../models/aliado')

const aliadosGet = async ( req, res = response) => {
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
        const [ total, aliados ] = await Promise.all([
            Aliado.countDocuments( query ),
            Aliado.find(query)
                    .populate('referido')
                    .populate('state')
                    .populate('ciudad')
                    .populate('pais')
                    .populate('cargo')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, aliados, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los aliados ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const aliadoGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const ciudad = await Aliado.findById( id )
                                    .populate( 'usuario')
                                    .populate('referido')
                                    .populate('state')
                                    .populate('ciudad')
                                    .populate('pais')
                                    .populate('cargo')

        return res.status(200).send(
            ciudad
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los aliados ${ error }`
        })
    }
}


const aliadosPost = async ( req, res = response ) => {


    try {
        const {codigo, nombre, iDFiscal, pais, state, ciudad, calle, 
            paginaWeb, nombreContact, apellidoContact, cargo, telefonoOfic, 
            telefonoCelu, correoContact} = req.body

        const aliadodDB = await Aliado.findOne( { nombre } )

        if ( aliadodDB ) {
            return res.status( 400 ).json({
                msg: `El aliado ${ aliadodDB.nombre } ya existe`
            })
        }
        const data = {
            codigo, 
            nombre, 
            iDFiscal, 
            pais, 
            state, 
            ciudad, 
            calle, 
            paginaWeb, 
            nombreContact, 
            apellidoContact, 
            cargo, 
            telefonoOfic, 
            telefonoCelu, 
            correoContact,
            usuario: req.usuario._id
        }

        const aliado = new Aliado( data )

        //Guardar en DB
        await aliado.save()

        return res.status( 201 ).json(aliado)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un aliado ${ error }`
            })

    }
} 

// actualizarPais 
const aliadoPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 
        const aliado = await Aliado.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            aliado
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los aliados ${ error }`
        })
    }
}

// borrarPais - status : false
const aliadoDelete = async ( req, res = response ) => {

    const { id } = req.params
    const aliado = await Aliado.findByIdAndUpdate( id, { status: false}, { new: true})

    res.json( aliado )
}

const allAliadosGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}, {'estado':2}]}; 
        query = {...options}
        const { id } = req.params
        const aliados = await Aliado.find(query)
        //const { cargos } = listCargos.data
        res.send({ aliados })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los aliados ${ query }`
        })
    }
}

// restaurarPais - status : true
const aliadoRestore = async ( req, res = response ) => {
    const { id } = req.params
    const aliado = await Aliado.findOneAndUpdate( {id, status: false}, { status: true}, { new: true});
    if(!aliado){
        return res.json(`El aliado solicitado no se encuentra eliminado`)
    }
    res.json( aliado )
}

module.exports = {
    aliadosPost,
    aliadosGet,
    aliadoGet,
    aliadoPut,
    aliadoDelete,
    aliadoRestore,
    allAliadosGet
}