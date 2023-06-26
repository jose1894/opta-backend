const { response } = require("express");
const Categoria  = require('../models/categoria')

// obtenerPaiss - paginado - total - populate

const categoriasGet = async ( req, res = response) => {
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
        const [ total, categorias ] = await Promise.all([
            Categoria.countDocuments( query ),
            Categoria.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, categorias, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las categorias ${ error }`
        })
    }

}

const categoriasGetDeleted = async ( req, res = response) => {
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
        const [ total, categorias ] = await Promise.all([
            Categoria.countDocuments( query ),
            Categoria.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, categorias, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las categorias ${ error }`
        })
    }

}

// obtenerPais - populate {}
const categoriaGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const categoria = await Categoria.findById( id ).populate( 'usuario' ).populate( 'unidadNegocio' )

        return res.status(200).send(
            categoria
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las categorias ${ error }`
        })
    }
}

const allCategoriasGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const categorias = await Categoria.find(query)
        res.send({ categorias })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las categorias ${ query }`
        })
    }
}

const categoriaPost = async ( req, res = response ) => {


    try {
        const { codigo, nombre, siglas, unidadNegocio, estado } = req.body

        const categoriaDB = await Categoria.findOne({
            $or : [ { nombre}, { codigo} ],
            unidadNegocio         
        })
        
        if ( categoriaDB ) {
            return res.status( 400 ).json({
                msg: (categoriaDB.nombre === nombre.toUpperCase()) ? `La categoria ${ categoriaDB.nombre } ya existe` : 
                                       `El codigo ${ categoriaDB.codigo } ya existe`,
                data: categoriaDB
            })
        }

        const data = {
            nombre,
            siglas,
            codigo,
            unidadNegocio,
            estado,
            usuario: req.usuario._id
        }

        const categoria = new Categoria( data )

        //Guardar en DB
        await categoria.save()

        return res.status( 201 ).json(categoria)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar una categoria ${ error }`
            })

    }
} 

// actualizarPais 
const categoriaPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 

        const categoria = await Categoria.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            categoria
        )

    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las categorias ${ error }`
        })
    }
}
const categoriasPorUnidadNegocio = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const categoriasList = await Categoria.find(query).populate({ path: 'unidadNegocio', match: { '_id': id }})
        const categorias = categoriasList.filter(categoria => categoria.unidadNegocio)
        res.send({ categorias })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las categorias ${ query }`
        })
    }
}

// borrarPais - status : false
const categoriaDelete = async ( req, res = response ) => {

    const { id } = req.params
    const categoria = await Categoria.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json(  )
}

// restaurarPais - status : truez
const categoriaRestore = async ( req, res = response ) => {

    const { id } = req.params
    const categoria = await Categoria.findByIdAndUpdate( id, { estado: true}, { new: true})

    if(!categoria){
        return res.json(`La categoria solicitada no se encuentra eliminada`)
    }

    res.json( categoria )
}

module.exports = {
    categoriaPost,
    categoriasGet,
    categoriaGet,
    categoriaPut,
    categoriaDelete,
    categoriaRestore,
    allCategoriasGet,
    categoriasGetDeleted,
    categoriasPorUnidadNegocio
}