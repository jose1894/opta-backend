const { Schema, model } = require('mongoose');
const Counter = require('./counter');

const CiudadSchema = Schema({
    codigo: {
        type: String 
    },
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio'],
        uppercase: true,
        trim: true,
        unique: true
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais',
        required: true,
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'Estado',
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

CiudadSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

CiudadSchema.pre('save', function (next) {
    const ciudad = this;
    Counter.findByIdAndUpdate(
        { _id: 'ciudadId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            ciudad.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});

module.exports = model( 'Ciudad', CiudadSchema);