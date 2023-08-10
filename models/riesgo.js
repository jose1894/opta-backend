const { Schema, model } = require('mongoose')

const RiesgoSchema = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
    },
    titulo: {
        type: String,
        required: [ true, 'El titulo es obligatorio'],
        uppercase: true,
    },
    descripcion: {
        type: String,
    },
    indice: {
        type: String,
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

RiesgoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Riesgo', RiesgoSchema)