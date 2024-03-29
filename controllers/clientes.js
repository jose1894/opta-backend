const { response } = require("express");
const Cliente  = require('../models/cliente')
const Contacto = require('../models/contacto')
const { filtrarPorPropiedades } = require("../helpers/filter-search")

const clientesGet = async ( req, res = response) => {
    try{
        const {
            q = '',
            page = 0,
            perPage = 10,
            estado = -1,
            sortBy   = 'codigo', 
            sortDesc = true 
        } = req.query;

        let jsonQ = q
        if(typeof q === "string") {
            jsonQ = (q) ? JSON.parse(q) : {}
        }
        let options = estado === -1 ? { $or: [{ 'estado': 1 }, { 'estado': 0 }] } : { $or: [{ 'estado': estado }] };       
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;
        
        query = {...options}
         
        // Promise . all envia varias promesas simultaneas
        let [ total, clientes ] = await Promise.all([
            Cliente.countDocuments( query ),
            Cliente.find(query)
                    .populate('industria')
                    .populate('miembro')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        if(q) {
            const keys = jsonQ?.filters
            const searchText = jsonQ.search 
            const clientesFilter =  filtrarPorPropiedades(keys, clientes, searchText);
            clientes = clientesFilter
            total = clientesFilter.length
        } 

        res.send({ total, clientes, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ error }`
        })
    }

}

const clientesGetDeleted = async ( req, res = response) => {
    try{
        const {
            q = '',
            page = 0,
            perPage = 10,
            estado = -1,
            sortBy   = 'codigo', 
            sortDesc = true 
        } = req.query;

        let jsonQ = q
        if(typeof q === "string") {
            jsonQ = (q) ? JSON.parse(q) : {}
        }
        let options = { $or:[ {'estado':2}]};        
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;
        query = {...options}
        // Promise . all envia varias promesas simultaneas
        let [ total, clientes ] = await Promise.all([
            Cliente.countDocuments( query ),
            Cliente.find(query)
                    .populate('industria')
                    .populate('pais')
                    .populate('estado')
                    .populate('ciudad')
                    .populate('miembro')
                    .skip( skip )
                    .sort(sort) 
                    .limit( perPage )
        ])

        if(q) {
            const keys = jsonQ?.filters
            const searchText = jsonQ.search 
            const clientesFilter =  filtrarPorPropiedades(keys, clientes, searchText);
            clientes = clientesFilter
            total = clientesFilter.length
        }

        res.send({ total, clientes, perPage:parseInt(perPage), page: parseInt(page)})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ error }`
        })
    }

}

// obtenerEtado - populate {}
const clienteGet = async ( req, res = response ) => {

    try{

        const { id } = req.params

        /*let cliente = await Cliente.findById( id )
                                   .populate( 'usuario')
                                   .populate('industria')
                                   .populate('pais')
                                   .populate('estado')
                                   .populate('ciudad')
                                   .populate('miembro')*/

        const [ contactos, cliente ] = await Promise.all([
            Contacto.find({'cliente': id}).populate( 'cargo'),
            Cliente.findById( id )
                    .populate( 'usuario')
                    .populate('industria')
                    .populate('pais')
                    .populate('state')
                    .populate('estado')
                    .populate('ciudad')
                    .populate('miembro')
        ])
        return res.status(200).send({cliente, contactos})

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar el cliente ${ error }`
        })
    }
}


const clientePost = async ( req, res = response ) => {


    try {
        const {codigo, 
            nombre, 
            iDFiscal, 
            industria, 
            companiaListada, 
            companiaRegulada, 
            casaMatriz, 
            pais, 
            state, 
            ciudad, 
            calle, 
            paginaWeb, 
            direccion,
            estado,
            contactos} = req.body

        const clientedDB = await Cliente.findOne({ iDFiscal} )

        if ( clientedDB ) {
            return res.status( 400 ).json({
                msg: `El id fiscal ${clientedDB.iDFiscal} ya existe`,
                data: clientedDB 
            })
        }
        const data = {
            codigo, 
            nombre, 
            iDFiscal, 
            industria, 
            companiaListada, 
            companiaRegulada, 
            casaMatriz, 
            pais, 
            state, 
            ciudad, 
            calle, 
            paginaWeb, 
            direccion, 
            miembro: req.usuario.membresia._id, 
            estado,
            usuario: req.usuario._id
        }
        const cliente = new Cliente( data )
        await cliente.save()        
        const { _id } = cliente
        const dataContacto = await Promise.all( contactos.map(async (contact) => {
            contact.cliente = _id
            const dataSave = new Contacto(contact)
            const dataSaveContactos = await dataSave.save()
         })
        );
        return res.status( 201 ).json(cliente)

    } catch ( error ) {
            

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un cliente ${ error }`
            })

    }
} 

// actualizarPais 
const clientePut = async ( req, res = response ) => {

    try{

        const { id } = req.params
        const { status, usuario, contactos, ...data } = req.body
        data.usuario = req.usuario._id 
        data.miembro = req.usuario.membresia._id 
        //const dataContact = await Contacto.deleteMany({ cliente: id })
        const cliente = await Cliente.findByIdAndUpdate( id, data, { new:true })
        const dataContacto = await Promise.all( contactos.map(async (contact) => {
            const { _id } = contact   
            if (_id === '') {
                const {_id, ...dataC} = contact
                const contactosData = new Contacto(dataC)
                await contactosData.save()
            } else {
                await Contacto.findByIdAndUpdate( _id, contact, { new:true })
            }
        })
    );

        return res.status(200).send(
            cliente
        )

    } catch ( error ) {
        

        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ error }`
        })
    }
}

// borrarPais - status : false
const clienteDelete = async ( req, res = response ) => {

    const { id } = req.params
    const cliente = await Cliente.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( cliente )
}

const allClientesGet = async ( req, res = response ) => {

    try{
    let options = { $or:[ {'estado':1}/*, {'estado':2}*/]}; 
        query = {...options}
        const { id } = req.params
        const cliente = await Cliente.find(query)
        //const { cargos } = listCargos.data
        res.send({ cliente })
    } catch ( error ) {
        
        return res.status( 500 ).json({
            msg: `Error del servidor al mostrar los clientes ${ query }`
        })
    }
}

// restaurarPais - status : true
const clienteRestore = async ( req, res = response ) => {
    const { id } = req.params
    const cliente = await Cliente.findByIdAndUpdate( id, { estado: true}, { new: true});
    if(!cliente){
        return res.json(`El cliente solicitado no se encuentra eliminado`)
    }
    res.json( cliente )
}

const clienteSearchGet = async (req, res = response) => {


    try {
        let nombreApellido = req.params.query;
        const clientes = await Cliente.find({
            $and: [
                {
                  $or: [
                    { nombre: { $regex: nombreApellido, $options: 'i' } }
                  ],
                },
                { estado: 1 },
              ],
        });
        res.send({ clientes })
    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar los clientes`
        })
    }
}



module.exports = {
    clientePost,
    clientesGet,
    clienteGet,
    clientePut,
    clienteDelete,
    clienteRestore,
    allClientesGet,
    clientesGetDeleted,
    clienteSearchGet
}