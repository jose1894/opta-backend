const { Schema, model } = require('mongoose');

const UnidadNegocioSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [3,'La longitud máxima es de 3 caracteres']
    },
    siglas: {
        type: String,
        required:[true, 'Las siglas son obligatorias'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [5,'La longitud máxima es de 3 caracteres']
    },
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
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
    },
});

UnidadNegocioSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'UnidadNegocio', UnidadNegocioSchema);