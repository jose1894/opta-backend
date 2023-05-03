const { Schema, model } = require('mongoose')

const PersonalSchema = Schema({
    nombres: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],
        uppercase: true,
        trim: true,
    },
    apellidos: {
        type: String,
        required: [ true, 'Apellidos es obligatorio'],
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
    telefono: {
        type: String,
        uppercase: true,
        trim: true,
        maxLength: [15,'La longitud máxima es de 15 caracteres']
    },
    email: {
        type:String,
        maxLength: [50,'La longitud máxima es de 50 caracteres']
    },
    direccion: {
        type:String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    profesion: {
        type: Schema.Types.ObjectId,
        ref: 'Profesion',
    },
    idiomas: {
        type: Schema.Types.ObjectId,
        ref: 'Idioma',
    },
    postgrado: {
        type:String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    unidadNegocio: {
        type: Schema.Types.ObjectId,
        ref: 'UnidadNegocio',
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
    },
    sucursal: {
        type: Schema.Types.ObjectId,
        ref: 'Sucursal',
    },
    perfil: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
    },
    usuarioAcceso: {
        type:String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    claveAcceso: {
        type:String,
        maxLength: [10,'La longitud máxima es de 10 caracteres']
    },
    miembro: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro',
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

PersonalSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Personal', PersonalSchema)