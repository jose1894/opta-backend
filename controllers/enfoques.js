const { response } = require("express");
const Enfoque  = require('../models/enfoque')
const { ObjectId } = require('mongodb');


const enfoquesGet = async ( req, res = response) => {
    try{
        let options = { $or:[ {'estado':1}, {'estado':0}]};   
        let filter = {'nombre':'Root'}
        let query = {}
        query = {
            //...filter,
            '$and': [
                options
            ]
        }
        let enfoques  = await Enfoque.find(query)/*.populate('miembro').populate('areaPadre') */
        procesarElementos(enfoques)       
        res.send({ enfoques })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los cargos ${ error }`
        })
    }
}

const procesarElementos =  async (array) =>{
  const resultados = await Promise.all(array.map(async (elemento) => {
    // Realizar operación en el elemento
    const {id} = elemento
    
    
    const resultado = await Enfoque.find({ 'areaPadre': id })
    elemento.children = resultado
    console.log(elemento)
    //console.log(elemento)
    
    // Si el elemento contiene un subarray, llamar a la función recursivamente    
   if (resultado.length > 0) {
        return procesarElementos(resultado);
       // elemento.children = resultado
        //console.log(elemento)
     // return procesarElementos(resultado);
    }
    // Devolver el resultado
    
    //return elemento;
  }));

  // Devolver el nuevo array con los resultados
  
  return resultados;
}

const getChild = async (enfoque) => {
    try{
        let enfoquesChildren  = await Enfoque.find({ 'areaPadre': id }).populate('miembro').populate('areaPadre') 
        enfoque.children = enfoquesChildren 
        //console.log(enfoquesChildren) 
        return enfoquesChildren  
        //res.send({ enfoques })
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
        const enfoquesList = await Enfoque.find(query).populate('miembro').populate('areaPadre')
        const children = enfoquesList.filter(enfoque => enfoque.children)
        res.send({ children })
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar lo sub-items ${ query }`
        })
    }
}

const enfoqueDelete = async ( req, res = response ) => {

    const { id } = req.params
    const enfoque = await Enfoque.deleteOne({ _id: ObjectId(id) })

    res.json( enfoque )
}

const enfoquePut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body
        data.usuario = req.usuario._id 
        const enfoque = await Enfoque.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            enfoque
        )

    } catch ( error ) {
        console.log( error )

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los enfoques ${ error }`
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
    enfoquePut,
    enfoqueDelete,
    getChildrenEnfoque
}