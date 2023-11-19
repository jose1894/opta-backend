const { Schema, model } = require('mongoose')
const Counter = require('./counter');

const IndustriaSchema = Schema({
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

IndustriaSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

IndustriaSchema.pre('save', function (next) {
    const industria = this;
    Counter.findByIdAndUpdate(
        { _id: 'industriaId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            industria.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});

module.exports = model( 'Industria', IndustriaSchema)