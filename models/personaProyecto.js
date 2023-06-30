const { Schema, model } = require('mongoose')

const PersonaProyectoSchema = Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
        required: true
    },
    personaId: {
        type: Schema.Types.ObjectId,
        ref: 'Personal',
        required: true
    },
    encargado: {
        type: Boolean,
        default: false,
        required: true
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

PersonaProyectoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'PersonaProyecto', PersonaProyectoSchema)