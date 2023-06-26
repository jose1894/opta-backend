const { response } = require("express");
const Menu  = require('../models/menu')

// obtenerPaiss - paginado - total - populate

const menuGet = async ( req, res = response) => {
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
        const [ total, menu ] = await Promise.all([
            Menu.countDocuments( query ),
            Menu.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, menu, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los items del menu ${ error }`
        })
    }

}

const menuGetDeleted = async ( req, res = response) => {
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
        const [ total, menu ] = await Promise.all([
            Menu.countDocuments( query ),
            Menu.find(query)
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        res.send({ total, menu, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los item del menu ${ error }`
        })
    }

}

// obtenerPais - populate {}
const menuItemGet = async ( req, res = response ) => {

    try{

        const { id } = req.params       

        const menuItem = await Menu.findById( id ).populate( 'usuario' )

        return res.status(200).send(
            menuItem
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el item del menu ${ error }`
        })
    }
}

const allMenuGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}/*, {'estado':0}*/]}; 
        query = {...options}
        const { id } = req.params
        const menu = await Menu.find(query)
        res.send({ menu })
    } catch ( error ) {
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los items del menu ${ query }`
        })
    }
}

const itemMenuPost = async ( req, res = response ) => {
    try {
        const {descripcion,codigo, estado} = req.body

        const menuDB = await Menu.findOne( { $or : [ { descripcion}, { codigo} ] } )

        if ( menuDB ) {
            return res.status( 400 ).json({
                msg: (menuDB.descripcion === descripcion.toUpperCase()) ? `El item del menu ${ menuDB.descripcion } ya existe` : 
                                       `El codigo ${ menuDB.codigo } ya existe`,
                data: menuDB
            })
        }

        const data = {
            descripcion,
            codigo,
            usuario: req.usuario._id,
            estado
        }

        const itemMenu = new Menu( data )

        //Guardar en DB
        await itemMenu.save()

        return res.status( 201 ).json(itemMenu)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar el item menu ${ error }`
            })

    }
} 

// actualizarPais 
const itemMenuPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.descripcion = data.descripcion.toUpperCase()
        data.usuario = req.usuario._id 

        const itemMenu = await Menu.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            itemMenu
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el item menu ${ error }`
        })
    }
}

// borrarPais - status : false
const itemMenuDelete = async ( req, res = response ) => {

    const { id } = req.params
    const itemMenu = await Menu.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( itemMenu )
}

// restaurarPais - status : true
const itemMenuRestore = async ( req, res = response ) => {

    const { id } = req.params
    const itemMenu = await Menu.findByIdAndUpdate( id, { estado: true}, { new: true})

    if(!itemMenu){
        return res.json(`La accion de perfil solicitado no se encuentra eliminada`)
    }

    res.json( itemMenu )
}

module.exports = {
    menuGet,
    menuGetDeleted,
    menuItemGet,
    allMenuGet,
    itemMenuPost,
    itemMenuPut,
    itemMenuDelete,
    itemMenuRestore
}