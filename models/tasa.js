const { Schema, model } = require('mongoose')

const TasaSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [3,'La longitud máxima es de 3 caracteres']
    },
    fecha: {
        type: Date,
        required: true
    }, 
    siglas: {
        type: String,
        required:[true, 'Las siglas son obligatorias'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [5,'La longitud máxima es de 3 caracteres']
    },
    unidadNegocio: {
        type: Schema.Types.ObjectId,
        ref: 'UnidadNegocio',
        required: true,
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true,
    },
    anterior: {
        type: String,
    },
    actual: {
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

TasaSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Tasa', TasaSchema)