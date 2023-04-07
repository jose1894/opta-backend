const { Schema, model } = require('mongoose');

const MiembroSchema = Schema({
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
        unique: true,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    iDFiscal: {
        type: String,
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [12,'La longitud máxima es de 12 caracteres']
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
    nombreContact: {
        type: String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    apellidoContact: {
        type: String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    cargo: {
        type: String,
        maxLength: [250, 'La Longitud máxima es de 250 caracteres']
    },
    telefonoOfic: {
        type: String,
        maxLength: [16, 'La Longitud máxima es de 16 caracteres']
    },
    telefonoCelu: {
        type: String,
        maxLength: [16, 'La Longitud máxima es de 16 caracteres']
    },
    correoContact: {
        type: String,
        maxLength: [250, 'La Longitud máxima es de 250 caracteres']
    },
    aliado: {
        type: Schema.Types.ObjectId,
        ref: 'Aliado',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
});

MiembroSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Miembro', MiembroSchema);