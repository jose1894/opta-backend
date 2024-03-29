const { Schema, model } = require('mongoose');
const Counter = require('./counter');

const AliadoSchema = Schema({
    codigo: {
        type: String,
        required:[true, 'El código es obligatorio', 'El código es el de la normativa ISO 3166'],
        uppercase: true,
        trim: true,
        unique: true,
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
    direccionAliado: {
        type:String
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
    correoContact: {
        type: String,
        maxLength: [250, 'La Longitud máxima es de 250 caracteres']
    },
    referidos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Miembro',
        }
    ],
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    direccion:{
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
});

AliadoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

AliadoSchema.pre('save', function (next) {
    const aliado = this;
    Counter.findByIdAndUpdate(
        { _id: 'aliadoId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            aliado.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});

module.exports = model( 'Aliado', AliadoSchema);