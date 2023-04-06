const { Schema, model } = require('mongoose');

const ReferidoSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        maxLength: [3,'La longitud máxima es de 3 caracteres']
    },
    fecha: {
        type: Date
    },
    numLicencias: {
        type: Number,
        maxLength: [3, 'La Longitud máxima es de 3 caracteres']
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
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
});

ReferidoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Referido', ReferidoSchema);