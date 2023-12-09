const { response } = require("express");
const Enfoque  = require('../models/enfoque')
const { ObjectId } = require('mongodb');
const Upload = require('../models/upload')
const Riesgo = require('../models/riesgo')


const enfoquesGet = async ( req, res = response) => {
    try{
        let options = { $or:[ {'estado':1}, {'estado':0}]};   
        let filter = {'tipoNodo':0}
        let query = {}
        query = {
            //...filter,
            '$and': [
                options
            ]
        }
        let enfoques  = await Enfoque.find(query).populate('miembro').populate('areaPadre')
        res.send({ enfoques })
    } catch ( error ) {
        
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
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar lo sub-items ${ query }`
        })
    }
}

const getChildrenPaginateGet = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
            sortDesc = true 
        } = req.query;     
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        sort[sortBy] = (sortDesc === "false") ? -1 : 1; 
        const { id } = req.params
        let filter = id === '1' ? { 'areaPadre': ObjectId() } : { 'areaPadre': id } 
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]};
        let query = {}
        query = {
            ...filter,
            '$and': [
                options
            ]
        }       
        
        const [ total = 0, dataEnfoques = []] = await Promise.all([
            Enfoque.countDocuments( query ),
            Enfoque.find(query)
                    .populate('miembro')
                    .populate('areaPadre')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        let enfoquesUploads = dataEnfoques.filter(enfoque => enfoque.children)
        const enfoques = await Promise.all(enfoquesUploads.map(async (item) => {
            try {
                item.countUpload = await Upload.countDocuments({ enfoque: item._id });                
            } catch (error) {
                item.countUpload = 0                
            } 
            item.countRisk = await Riesgo.countDocuments({
                ...{ indice: item._id },
                '$and': [
                    options
                ]

            })           
            return item;
        }));

        res.send({ total, enfoques, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los enfoques ${ error }`
        })
    }

}

const enfoqueDelete = async ( req, res = response ) => {

    const { id } = req.params
    const dataDeleted = req.params
    const enfoque = await Enfoque.deleteOne({ _id: ObjectId(id) })

    res.json({enfoque, dataDeleted})
}

const enfoquePut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body
        data.ruta = data.tipoNodo === 1 ? getRutaEnfoque(data.nombre) : `${data.rutaPadre}/${data.indice}`
        data.usuario = req.usuario._id 
        data.miembro = req.usuario.membresia._id 
        const enfoque = await Enfoque.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            enfoque
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los enfoques ${ error }`
        })
    }
}

const getRutaEnfoque = (descripcionEnfoque) => {
    descripcionEnfoque = descripcionEnfoque.trim();
    descripcionEnfoque = descripcionEnfoque.replace(/á|à|ä|â|ª/g, 'a')
                   .replace(/Á|À|Â|Ä/g, 'A')
                   .replace(/é|è|ë|ê/g, 'e')
                   .replace(/É|È|Ê|Ë/g, 'E')
                   .replace(/í|ì|ï|î/g, 'i')
                   .replace(/Í|Ì|Ï|Î/g, 'I')
                   .replace(/ó|ò|ö|ô/g, 'o')
                   .replace(/Ó|Ò|Ö|Ô/g, 'O')
                   .replace(/ú|ù|ü|û/g, 'u')
                   .replace(/Ú|Ù|Û|Ü/g, 'U')
                   .replace(/ñ/g, 'n')
                   .replace(/Ñ/g, 'N')
                   .replace(/ç/g, 'c')
                   .replace(/Ç/g, 'C');
    //This part is responsible for removing any strange character
    descripcionEnfoque = descripcionEnfoque.replace(/[\s\\¨º\-\~#@|!"·$%&/()?'¡¿[\]^`+{}´>¿< ;,:.]/g, '_');
    return descripcionEnfoque;
}

const enfoqueById = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const enfoque = await Enfoque.findById( id ).populate( 'usuario').populate('areaPadre')

        return res.status(200).send(
            enfoque
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el enfoque ${ error }`
        })
    }
}

const enfoquePost = async ( req, res = response ) => {
    try {
        const {indice,nombre,areaPadre,areaPadreNombre,rutaPadre,ruta,visible,rcr,editable, estado, tipoNodo} = req.body

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
            areaPadreNombre,
            rutaPadre,
            ruta,
            visible,
            rcr,
            editable, 
            estado, 
            miembro: req.usuario.membresia._id,
            tipoNodo,
            usuario: req.usuario._id
        }
        data.ruta = data.tipoNodo === 1 ? getRutaEnfoque(data.nombre) : `${data.rutaPadre}/${data.indice}`
        const enfoque = new Enfoque( data )
        //Guardar en DB
        await enfoque.save()
        return res.status( 201 ).json(enfoque)
    } catch ( error ) {
            
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
    enfoqueById,
    getChildrenEnfoque,
    getChildrenPaginateGet 
}