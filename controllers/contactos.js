const { response } = require("express");
const Contacto  = require('../models/contacto')


const contactoPost = async ( req, res = response ) => {


    try {

        console.log(req.body)

        return res.status( 200 ).json({
            msg: `Error del servidor al guardar un cargo + create`
        })
        /*const {nombre,apellido, cargo, telefonoOfic,telefonoCelu, correo} = c

        const data = {
            nombre,
            apellido, 
            cargo, 
            telefonoOfic,
            telefonoCelu, 
            correo
        }

        const contacto = new Contacto( data )

        //Guardar en DB
        await contacto.save()

        return res.status( 201 ).json(cargo)*/

    } catch ( error ) {
            console.log( error )

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un cargo ${ error }`
            })

    }
} 


module.exports = {
    contactoPost
}