const { Schema, model } = require('mongoose');
const Counter = require('./counter');

const UnidadNegocioSchema = Schema({
    codigo: {
        type: String
    },
    siglas: {
        type: String,
        required:[true, 'Las siglas son obligatorias'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [5,'La longitud máxima es de 3 caracteres']
    },
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
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
    },
});

UnidadNegocioSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

UnidadNegocioSchema.pre('save', function (next) {
    const unidadNegocio = this;
    Counter.findByIdAndUpdate(
        { _id: 'unidadNegocioId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            unidadNegocio.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});

module.exports = model( 'UnidadNegocio', UnidadNegocioSchema);