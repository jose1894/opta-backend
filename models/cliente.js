const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        maxLength: [3,'La longitud máxima es de 3 caracteres']
    },
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],
        uppercase: true,
        trim: true,
        unique: true
    },
    iDFiscal: {
        type: String,
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [12,'La longitud máxima es de 12 caracteres']
    },
    industria: {
        type: Schema.Types.ObjectId,
        ref: 'Industria',
    },
    companiaListada : {
        type: Number,
        default: 1,
        enum: [1,2]
    },
    companiaRegulada : {
        type: Number,
        default: 1,
        enum: [1,2]
    },
    casaMatriz: {
        type: String,
        maxLength: [250,'La longitud máxima es de 12 caracteres']
    },  
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais',
        required: true,
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'Estado',
        required: true,
    },
    ciudad: {
        type: Schema.Types.ObjectId,
        ref: 'Ciudad',
        required: true,
    },
    calle: {
        type:String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    paginaWeb: {
        type: String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    direccion: {
        type: String,
        uppercase: true,
        trim: true,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    miembro: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

ClienteSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Cliente', ClienteSchema);