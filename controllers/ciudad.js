const { response } = require("express");
const Ciudad  = require('../models/ciudad')

const ciudadesGet = async ( req, res = response) => {
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
        const [ total, ciudades ] = await Promise.all([
            Ciudad.countDocuments( query ),
            Ciudad.find(query)
                    .populate( 'state' )
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, ciudades, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las ciudades ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const ciudadGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const ciudad = await Ciudad.findById( id ).populate( 'usuario').populate('state')

        return res.status(200).send(
            ciudad
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los estados ${ error }`
        })
    }
}


const ciudadesPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo, state} = req.body

        const ciudadDB = await Ciudad.findOne( { nombre } )

        if ( ciudadDB ) {
            return res.status( 400 ).json({
                msg: `La ciudad ${ ciudadDB.nombre } ya existe`
            })
        }
        const data = {
            nombre,
            codigo,
            usuario: req.usuario._id,
            state
        }

        const ciudad = new Ciudad( data )

        //Guardar en DB
        await ciudad.save()

        return res.status( 201 ).json(ciudad)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un ciudad ${ error }`
            })

    }
} 

// actualizarPais 
const ciudadPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 
        const ciudad = await Ciudad.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            ciudad
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las ciudades ${ error }`
        })
    }
}

// borrarPais - status : false
const ciudadDelete = async ( req, res = response ) => {

    const { id } = req.params
    const ciudad = await Ciudad.findByIdAndUpdate( id, { status: false}, { new: true})

    res.json( ciudad )
}

// restaurarPais - status : true
const ciudadRestore = async ( req, res = response ) => {

    const { id } = req.params
    const ciudad = await Ciudad.findOneAndUpdate( {id, status: false}, { status: true}, { new: true})

    if(!ciudad){
        return res.json(`La ciudad solicitada no se encuentra eliminada`)
    }

    res.json( ciudad )
}

module.exports = {
    ciudadesPost,
    ciudadesGet,
    ciudadGet,
    ciudadPut,
    ciudadDelete,
    ciudadRestore
}