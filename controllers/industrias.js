const { response } = require("express");
const   Industria  = require('../models/industria')

// obtenerPaiss - paginado - total - populate

const industriasGet = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
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
        const [ total, industrias ] = await Promise.all([
            Industria.countDocuments( query ),
            Industria.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, industrias, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las industrias ${ error }`
        })
    }

}

const industriasGetDeleted = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
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
        const [ total, industrias ] = await Promise.all([
            Industria.countDocuments( query ),
            Industria.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])
        
        res.send({ total, industrias, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las industrias ${ error }`
        })
    }

}

// obtenerPais - populate {}
const industriaGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const industria = await Industria.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            industria
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las industrias ${ error }`
        })
    }
}

const allIndustriasGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const industrias = await Industria.find(query)
        //const { cargos } = listCargos.data
        res.send({ industrias })
    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar las industrias+ ${ query }`
        })
    }
}

const industriaPost = async ( req, res = response ) => {


    try {
        const {nombre,codigo, estado} = req.body

        const industriaDB = await Industria.findOne( { $or : [ { nombre}, { codigo} ] } )

        if ( industriaDB ) {
            return res.status( 400 ).json({
                msg: (industriaDB.nombre === nombre.toUpperCase()) ? `La industria ${ industriaDB.nombre } ya existe` : 
                                       `La industria ${ industriaDB.codigo } ya existe`,
                data: industriaDB
            })
        }

        const data = {
            nombre,
            usuario: req.usuario._id,
            estado
        }

        const industria = new Industria( data )

        //Guardar en DB
        await industria.save()

        return res.status( 201 ).json(industria)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar una industria ${ error }`
            })

    }
} 

// actualizarPais 
const industriaPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id 

        const industria = await Industria.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            industria
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar la industria ${ error }`
        })
    }
}

// borrarPais - status : false
const industriaDelete = async ( req, res = response ) => {

    const { id } = req.params
    const industria = await Industria.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( industria )
}

// restaurarPais - status : true
const industriaRestore = async ( req, res = response ) => {

    const { id } = req.params
    const industria = await Industria.findByIdAndUpdate( id, { estado: true}, { new: true})

    if(!industria){
        return res.json(`La industria solicitado no se encuentra eliminada`)
    }

    res.json( industria )
}

module.exports = {
    industriaPost,
    industriasGet,
    industriaGet,
    industriaPut,
    industriaDelete,
    industriaRestore,
    allIndustriasGet,
    industriasGetDeleted
}