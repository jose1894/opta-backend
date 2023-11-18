const { Schema, model } = require('mongoose')
const Counter = require('./counter');

const CargoSchema = Schema({
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

CargoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

CargoSchema.pre('save', function (next) {
    const cargo = this;
    Counter.findByIdAndUpdate(
        { _id: 'cargoId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            cargo.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});

module.exports = model( 'Cargo', CargoSchema)