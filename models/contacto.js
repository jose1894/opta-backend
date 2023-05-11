const { Schema, model } = require('mongoose')

const ContactoSchema = Schema({
    nombre: {
        type: String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    apellido: {
        type: String,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    cargo: {
        type: Schema.Types.ObjectId,
        ref: 'Cargo',
    },
    telefonoOfic: {
        type: String,
        maxLength: [16, 'La Longitud máxima es de 16 caracteres']
    },
    telefonoCelu: {
        type: String,
        maxLength: [16, 'La Longitud máxima es de 16 caracteres']
    },
    correo: {
        type: String,
        maxLength: [250, 'La Longitud máxima es de 250 caracteres']
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
})

ContactoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Contacto', ContactoSchema)