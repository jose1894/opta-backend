const { response } = require("express");
const Idioma  = require('../models/idioma')

// obtenerPaiss - paginado - total - populate

const idiomasGet = async ( req, res = response) => {
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
        const [ total, idiomas ] = await Promise.all([
            Idioma.countDocuments( query ),
            Idioma.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, idiomas, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los idiomas ${ error }`
        })
    }

}

const idiomasGetDeleted = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'nombre', 
            sortDesc = true, 
        } = req.query;

        let options = { $or:[ {'estado': 2}]};        
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
        const [ total, idiomas ] = await Promise.all([
            Idioma.countDocuments( query ),
            Idioma.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, idiomas, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los idiomas ${ error }`
        })
    }

}

// obtenerPais - populate {}
const idiomaGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const idioma = await Idioma.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            idioma
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el idioma ${ error }`
        })
    }
}

const allIdiomasGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const idiomas = await Idioma.find(query)
        //const { cargos } = listCargos.data
        res.send({ idiomas })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los idiomas ${ query }`
        })
    }
}

const idiomaPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo, estado} = req.body

        const idiomaDB = await Idioma.findOne( { $or : [ { nombre}, { codigo} ] } )

        if ( idiomaDB ) {
            return res.status( 400 ).json({
                msg: (idiomaDB.nombre === nombre.toUpperCase()) ? `El cargo ${ idiomaDB.nombre } ya existe` : 
                                       `El cargo ${ idiomaDB.codigo } ya existe`,
                data: idiomaDB
            })
        }

        const data = {
            nombre,
            codigo,
            usuario: req.usuario._id,
            estado
        }

        const idioma = new Idioma( data )

        //Guardar en DB
        await idioma.save()

        return res.status( 201 ).json(idioma)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un idioma ${ error }`
            })

    }
} 

// actualizarPais 
const idiomaPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 

        const idioma = await Idioma.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            idioma
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al actualizar el idioma ${ error }`
        })
    }
}

// borrarPais - status : false
const idiomaDelete = async ( req, res = response ) => {

    const { id } = req.params
    const idioma = await Idioma.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( idioma )
}

// restaurarPais - status : true
const idiomaRestore = async ( req, res = response ) => {

    const { id } = req.params
    const idioma = await Idioma.findOneAndUpdate( {id, estado: false}, { estado: true}, { new: true})

    if(!idioma){
        return res.json(`El idioma solicitado no se encuentra eliminado`)
    }

    res.json( idioma )
}

module.exports = {
    idiomaPost,
    idiomasGet,
    idiomaGet,
    idiomaPut,
    idiomaDelete,
    idiomaRestore,
    allIdiomasGet,
    idiomasGetDeleted
}