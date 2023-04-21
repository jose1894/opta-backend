const { Schema, model } = require('mongoose');

const PerfilSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [3,'La longitud máxima es de 3 caracteres']
    },
    descripcion: {
        type: String,
        required: [ true, 'La descripcion es obligatoria'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    menu: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    accionesPerfil: [{
        type: Schema.Types.ObjectId,
        ref: 'AccionPerfil',
        required: true
    }],
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
PerfilSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Perfil', PerfilSchema);