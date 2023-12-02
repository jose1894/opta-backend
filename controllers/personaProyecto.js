const { response } = require("express");
const PersonaProyecto  = require('../models/personaProyecto');

const personaProyectoPost = async ( req, res = response ) => {


    try {
        const dataPersonaProyecto = req.body
        const idPP = dataPersonaProyecto[0].projectId
        const deleteProjects = await PersonaProyecto.deleteMany({ projectId: idPP })

        const promisesSave = dataPersonaProyecto.map(obj => { 
            const data = {
                projectId:obj.projectId,
                personaId:obj.personaId,
                usuario: req.usuario._id,
                encargado:obj.encargado,
                persisteState: 'New',
            }
            return new PersonaProyecto(data).save()
        });

        const newData = await Promise.all(promisesSave)
        return res.status( 201 ).json({ newData })
        /*const existingData = await PersonaProyecto.find({
            $and: [
              { personaId: { $in: dataPersonaProyecto.map(obj => obj.personaId) } },
              { projectId: { $in: dataPersonaProyecto.map(obj => obj.projectId) } }
            ]
          });
        const existingPersonaId = existingData.map(obj => {
            const id = obj.personaId
            return {_id: obj._id, personaId: id.toString()} ;
        } );        
        const newDataPersonaProyecto = dataPersonaProyecto.map(obj => { 
            const id = obj.personaId
            const exist = existingPersonaId.filter(obj => obj.personaId === id)
            if(exist.length > 0) {
                obj._id = exist[0]._id
                obj.persisteState = 'Update'
             }
            return obj
        });
        const saveDataPersonaProyecto = newDataPersonaProyecto.filter(obj => obj.persisteState === 'New')
        const updateDataPersonaProyecto = newDataPersonaProyecto.filter(obj => obj.persisteState === 'Update')
        const promisesSave = saveDataPersonaProyecto.map(obj => { 
            const data = {
                projectId:obj.projectId,
                personaId:obj.personaId,
                usuario: req.usuario._id,
                encargado:obj.encargado,
                persisteState: 'New',
            }
            return new PersonaProyecto(data).save()
        });
        const promisesUpdate= updateDataPersonaProyecto.map(obj => { 
            const _id = (obj._id).toString()
            const data = {
                _id:_id.toString(),                
                projectId:(obj.projectId).toString(),
                personaId:(obj.personaId).toString(),
                usuario: req.usuario._id,
                encargado:obj.encargado,
                persisteState: 'Update',
            }
            return PersonaProyecto.findByIdAndUpdate(_id, data, { new: true });
        });
        if(saveDataPersonaProyecto.length > 0 && updateDataPersonaProyecto.length > 0) {
            const newData = await Promise.all(promisesSave)
            const updateData = await Promise.all(promisesUpdate)
            return res.status( 201 ).json({ newData,updateData  })
        } else if(saveDataPersonaProyecto.length > 0 && updateDataPersonaProyecto.length === 0) {
            const [ newData ] = await Promise.all(promisesSave)
            return res.status( 201 ).json({newData, updateData: []})
        } else if(saveDataPersonaProyecto.length === 0 && updateDataPersonaProyecto.length > 0) {
            const [ updateData ] = await Promise.all(promisesUpdate)
            return res.status( 201 ).json({newData: [], updateData})
        }*/ 
    } catch ( error ) {           

            return res.status( 500 ).json({
                msg: `Error del servidor al guardar un idioma ${ error }`
            })

    }
} 


const personaProyectoById = async (req, res = response) => {

    try {

        const { id } = req.params
        const personas = await PersonaProyecto.find( { projectId: id })
            .populate('usuario')
            .populate('personaId')
            .populate('projectId')

        return res.status(200).send({ personas })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar las personas ${error}`
        })
    }
}


// borrarPais - status : false
const personaProyectoDelete = async ( req, res = response ) => {

    const { id, personaId } = req.params
    const personaProyecto = await PersonaProyecto.deleteOne({ projectId: id, personaId })
    //await PersonaProyecto.findByIdAndUpdate( id, { estado: 2}, { new: true})

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
    personaProyectoById
}