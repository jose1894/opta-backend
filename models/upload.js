const { Schema, model } = require('mongoose')

const UploadSchema = Schema({
    nombre: {
        type: String,
        unique: true,
    },
    nombreBinario: {
        type: String,
    },
    ruta: {
        type: String,
    },
    type: {
        type: String,
        required: true
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
    },
    enfoque: {
        type: Schema.Types.ObjectId,
        ref: 'Enfoque',
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

UploadSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Upload', UploadSchema)