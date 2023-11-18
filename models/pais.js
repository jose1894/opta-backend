const { Schema, model } = require('mongoose')
const Counter = require('./counter')

const PaisSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        maxLength: [2, 'La longitud máxima es de 2 caracteres']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        uppercase: true,
        trim: true,
        unique: true
    },
    estado: {
        type: Number,
        default: 1,
        enum: [0, 1, 2],
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

PaisSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}

module.exports = model('Pais', PaisSchema)