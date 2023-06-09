const { Schema, model } = require('mongoose')

const ProyectoSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [10,'La longitud máxima es de 10 caracteres']
    },
    fecha: {
        type: Date,
        required: [ true, 'La fecha es obligatorio'],
    },
    creado : {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    cliente : {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    socio : {
        type: Schema.Types.ObjectId,
        ref: 'Personal',
        required: true,
    },
    gerente : {
        type: Schema.Types.ObjectId,
        ref: 'Personal',
        required: true,
    },
    sucursal : {
        type: Schema.Types.ObjectId,
        ref: 'Sucursal',
        required: true,
    },
    unidadNegocio : {
        type: Schema.Types.ObjectId,
        ref: 'UnidadNegocio',
        required: true,
    },
    tipoServicio : {
        type: Schema.Types.ObjectId,
        ref: 'Actividad',
        required: true,
    },
    descripcionServicio : {
        type: String,
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    membresia: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro',
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

ProyectoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Proyecto', ProyectoSchema)