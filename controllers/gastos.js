const { response } = require("express");
const Gasto  = require('../models/gasto')

const gastosGet = async ( req, res = response) => {
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
        const [ total, gastos ] = await Promise.all([
            Gasto.countDocuments( query ),
            Gasto.find(query)
                .skip( skip )
                .sort(sort) 
                .limit( perPage )
        ])

        res.send({ total, gastos, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los gastos ${ error }`
        })
    }

}

const gastosGetDelete = async ( req, res = response) => {
    try{
        const {
            q        = '', 
            page     = 0, 
            perPage  = 10, 
            sortBy   = 'codigo', 
            sortDesc = true 
        } = req.query;

        let options = { $or:[{'estado':2}]};        
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
        const [ total, gastos ] = await Promise.all([
            Gasto.countDocuments( query ),
            Gasto.find(query)
                .skip( skip )
                .sort(sort) 
                .limit( perPage )
        ])

        res.send({ total, gastos, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los gastos ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const gastoGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const gasto = await Gasto.findById( id ).populate( 'usuario')

        return res.status(200).send(
            gasto
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el gasto ${ error }`
        })
    }
}


const gastoPost = async ( req, res = response ) => {


    try {
        const {concepto, estado} = req.body

        const gastoDB = await Gasto.findOne( { concepto } )

        if ( gastoDB ) {
            return res.status( 400 ).json({
                msg: `La unida de gasto ${ gastoDB.concepto } ya existe`
            })
        }
        const data = {
            concepto,
            estado,
            usuario: req.usuario._id
        }

        const gasto = new Gasto( data )

        //Guardar en DB
        await gasto.save()

        return res.status( 201 ).json(gasto)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar el gasto ${ error }`
            })

    }
} 

// actualizarPais 
const gastoPut = async ( req, res = response ) => {

    try{

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.usuario = req.usuario._id 
        const gasto = await Gasto.findByIdAndUpdate( id, data, { new:true })

        return res.status(200).send(
            gasto
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el gasto ${ error }`
        })
    }
}

// borrarPais - status : false
const gastoDelete = async ( req, res = response ) => {

    const { id } = req.params
    const gasto = await Gasto.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( gasto )
}

const allGastosGet = async ( req, res = response ) => {

    try{
        let options = { $or:[ {'estado':1}, {'estado':2}]}; 
        query = {...options}
        const gastos = await Gasto.find(query)
        //const { cargos } = listCargos.data
        res.send({ gastos })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los gastos ${ query }`
        })
    }
}

// restaurarPais - status : true
const gastoRestore = async ( req, res = response ) => {
    const { id } = req.params
    const gasto = await Gasto.findByIdAndUpdate( id, { estado: true}, { new: true});
    if(!gasto){
        return res.json(`el gasto solicitado no se encuentra eliminado`)
    }
    res.json( gasto )
}

module.exports = {
    gastoPost,
    gastosGet,
    gastoGet,
    gastoPut,
    gastoDelete,
    gastoRestore,
    allGastosGet,
    gastosGetDelete
}