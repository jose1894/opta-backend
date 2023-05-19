const { response } = require("express");
const Enfoque  = require('../models/enfoque')


const enfoquesGet = async ( req, res = response) => {
    try{
        let options = { $or:[ {'estado':1}, {'estado':0}]};   
        let filter = {'nombre':'Root'}
        let query = {}
        query = {
            ...filter,
            '$and': [
                options
            ]
        }
        let enfoques  = await Enfoque.find(query)        
        res.send({ enfoques })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }
}

const getChildrenEnfoque = async ( req, res = response ) => {

    try{
        const { id } = req.params
        let filter = { 'areaPadre': id }
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]};
        let query = {}
        query = {
            ...filter,
            '$and': [
                options
            ]
        }
        const enfoquesList = await Enfoque.find(query)
        const children = enfoquesList.filter(enfoque => enfoque.children)
        res.send({ children })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar lo sub-items ${ query }`
        })
    }
}

const enfoquePost = async ( req, res = response ) => {


    try {
        const {indice,nombre,areaPadre,ruta,visible,rcr,editable, estado, miembro} = req.body

        const enfoqueDB = await Enfoque.findOne( { $or : [ { nombre}, { indice } ] } )

        if ( enfoqueDB ) {
            return res.status( 400 ).json({
                msg: (enfoqueDB.nombre === nombre.toUpperCase()) ? `El enfoque ${ enfoqueDB.nombre } ya existe` : 
                                       `El enfoque ${ enfoqueDB.indice } ya existe`,
                data: enfoqueDB
            })
        }

        const data = {
            indice,
            nombre,
            areaPadre,
            ruta,
            visible,
            rcr,
            editable, 
            estado, 
            miembro,
            usuario: req.usuario._id
        }

        const enfoque = new Enfoque( data )

        //Guardar en DB
        await enfoque.save()

        return res.status( 201 ).json(enfoque)

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar el enfoque ${ error }`
            })

    }
} 

module.exports = {
    enfoquePost,
    enfoquesGet,
    getChildrenEnfoque
}