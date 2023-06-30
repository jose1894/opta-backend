const { response } = require("express");
const PersonaProyecto  = require('../models/personaProyecto');
const personaProyecto = require("../models/personaProyecto");


const personaProyectoPost = async ( req, res = response ) => {


    try {
        const dataPersonaProyecto = req.body
        const existingData = await PersonaProyecto.find({ personaId: { $in: dataPersonaProyecto.map(obj => obj.personaId) } });
        const existingPersonaId = existingData.map(obj => obj.personaId);
        const newDataPersonaProyecto = dataPersonaProyecto.filter(obj => !existingPersonaId.includes(obj.personaId));
        const promises = newDataPersonaProyecto.map(obj => { 
            const data = {
                projectId:obj.projectId,
                personaId:obj.personaId,
                usuario: req.usuario._id,
                encargado:obj.encargado,
            }
            return new PersonaProyecto(data).save()
        });
        await Promise.all(promises);

        /*
        const existingPersonaId = existingData.map(obj => obj.personaId);
        const newDataPersonaProyecto = dataPersonaProyecto.filter(obj => !existingPersonaId.includes(obj.personaId));
        const promises = newDataPersonaProyecto.map(obj => { 
            obj.usuario = req.usuario._id
            return new PersonaProyecto(obj).save()
        });

        await Promise.all(promises);*/
        //res.status(200).json({ message: 'New objects saved successfully' });


       /* const idiomaDB = await Idioma.findOne( { $or : [ { nombre}, { codigo} ] } )
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
        await idioma.save()*/

        return res.status( 201 ).json({ message: 'New objects saved successfully' })

    } catch ( error ) {           

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un idioma ${ error }`
            })

    }
} 

// borrarPais - status : false
const personaProyectoDelete = async ( req, res = response ) => {

    const { id } = req.params
    const personaProyecto = await PersonaProyecto.findByIdAndUpdate( id, { estado: 2}, { new: true})

    res.json( personaProyecto )
}

// restaurarPais - status : true
const personaProyectoRestore = async ( req, res = response ) => {

    const { id } = req.params
    const personaProyecto = await personaProyecto.findByIdAndUpdate( id, { estado: true}, { new: true})

    if(!personaProyecto){
        return res.json(`la persona solicitado no se encuentra eliminado`)
    }

    res.json( personaProyecto )
}

module.exports = {
    personaProyectoPost,
    personaProyectoDelete,
    personaProyectoRestore,
}