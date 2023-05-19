const { Schema, model } = require('mongoose')

const EnfoqueSchema = Schema({
    indice: {
        type: String,
        required:[true, 'El indice es obligatorio'],
        unique: true,
        maxLength: [3,'La longitud máxima es de 2 caracteres']
    },
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],
        trim: true,
        unique: true
    },
    areaPadre: {
        type: Schema.Types.ObjectId,
        ref: 'Enfoque'
    },
    ruta: {
        type: String,
        trim: true,
    },
    visible : {
        type: Number,
        default: 1,
        enum: [0,1], //0-no y 1-si
    },
    rcr : {
        type: Number,
        default: 0,
        enum: [0,1], //0-no y 1-si
    },
    editable : {
        type: Number,
        default: 0,
        enum: [0,1], //0-no y 1-si
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    children:[{
        type: Schema.Types.ObjectId,
        ref: 'Enfoque'
    }],
    miembro: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

EnfoqueSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Enfoque', EnfoqueSchema)