const { Schema, model } = require('mongoose')

const ActividadSchema = Schema({
    unidadNegocio : {
        type: Schema.Types.ObjectId,
        ref: 'UnidadNegocio',
        required: true,
    },
    siglas : {
        type: String,
        unique: true,
        uppercase: true,
        maxLength: [4,'La longitud máxima es de 4 caracteres'],
        required: true,
    },
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],        
        trim: true,
    },
    cargable : {
        type: Number,
        default: 1,
        enum: [0,1],
        required: true,
    },
    miembro: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro'
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

ActividadSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Actividad', ActividadSchema)