const { response } = require("express");
const moment = require('moment');
const Miembro  = require('../models/miembro')

const miembrosGet = async ( req, res = response) => {
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
        const [ total, miembros ] = await Promise.all([
            Miembro.countDocuments( query ),
            Miembro.find(query)
                    .populate('aliado')
                    .populate('cargo')
                    .populate('moneda')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, miembros, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los miembros ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const miembroGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        let miembro = await Miembro.findById( id )
                                   .populate( 'usuario')
                                   .populate('aliado')
                                   .populate('state')
                                   .populate('ciudad')
                                   .populate('pais')
                                   .populate('cargo')
                                   .populate('moneda')
        miembro.vigencia = moment(miembro.vigencia).format('MM/DD/YYYY');
        console.log(miembro.vigencia)

        return res.status(200).send(
            miembro
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los miembros ${ error }`
        })
    }
}


const miembroPost = async ( req, res = response ) => {


    try {
        const {aliado, codigo, nombre, iDFiscal, ejercicioFiscal, pais, state, ciudad, calle, 
            paginaWeb, tipoContacto, nombreContact, apellidoContact, cargo, telefonoOfic, 
            telefonoCelu, correoContact, codigoActivacion, licencias, vigencia, moneda, periodoRevision,
            creacion, declaracionHoras, modificacionHoras, requiereAprobacion, estado} = req.body

        const miembrodDB = await Miembro.findOne( { nombre } )

        if ( miembrodDB ) {
            return res.status( 400 ).json({
                msg: `El miembro ${ miembrodDB.nombre } ya existe`
            })
        }
        const data = {
            aliado,
            codigo, 
            nombre, 
            iDFiscal, 
            ejercicioFiscal,
            pais, 
            state, 
            ciudad, 
            calle, 
            paginaWeb, 
            tipoContacto,
            nombreContact, 
            apellidoContact, 
            cargo, 
            telefonoOfic, 
            telefonoCelu, 
            correoContact,
            codigoActivacion, 
            licencias, 
            vigencia, 
            moneda, 
            periodoRevision,
            creacion, 
            declaracionHoras, 
            modificacionHoras, 
            requiereAprobacion, 
            estado,
            usuario: req.usuario._id
        }

        const miembro = new Miembro( data )

        //Guardar en DB
        await miembro.save()

        return res.status( 201 ).json(miembro)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un miembro ${ error }`
            })

    }
} 

// actualizarPais 
const miembroPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 
        const miembro = await Miembro.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            miembro
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los miembros ${ error }`
        })
    }
}

// borrarPais - status : false
const miembroDelete = async ( req, res = response ) => {

    const { id } = req.params
    const miembro = await Miembro.findByIdAndUpdate( id, { status: false}, { new: true})

    res.json( miembro )
}

const allMiembrosGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}, {'estado':2}]}; 
        query = {...options}
        const { id } = req.params
        const miembros = await Miembro.find(query)
        //const { cargos } = listCargos.data
        res.send({ miembros })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los miembros ${ query }`
        })
    }
}

// restaurarPais - status : true
const miembroRestore = async ( req, res = response ) => {
    const { id } = req.params
    const miembro = await Miembro.findOneAndUpdate( {id, status: false}, { status: true}, { new: true});
    if(!miembro){
        return res.json(`El miembro solicitado no se encuentra eliminado`)
    }
    res.json( miembro )
}

module.exports = {
    miembroPost,
    miembrosGet,
    miembroGet,
    miembroPut,
    miembroDelete,
    miembroRestore,
    allMiembrosGet
}