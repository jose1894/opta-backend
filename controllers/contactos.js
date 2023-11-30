const { response } = require("express");
const Contacto  = require('../models/contacto')


const contactoDelete = async ( req, res = response ) => {
    try {
        const { id } = req.params
        const contacto = await Contacto.deleteOne({ _id: id })
        return res.status(200).send({
            contacto,
            msj: 'Eliminado con exito'
        })        
    } catch (error) {
        return res.status(500).send({
            error,
            msj: 'Error al eliminar el contacto'
        })
        
    }

    
}


module.exports = {
    contactoDelete
}