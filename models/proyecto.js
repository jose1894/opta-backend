const { Schema, model } = require('mongoose')
const Counter = require('./counter');

const ProyectoSchema = Schema({
    codigo: {
        type: String
    },
    fecha: {
        type: Date,
        required: [ true, 'La fecha es obligatorio'],
        default: Date.now,
    },
    creado : {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    cliente : {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    socio : {
        type: Schema.Types.ObjectId,
        ref: 'Personal',
        required: true,
    },
    gerente : {
        type: Schema.Types.ObjectId,
        ref: 'Personal',
        required: true,
    },
    sucursal : {
        type: Schema.Types.ObjectId,
        ref: 'Sucursal',
        required: true,
    },
    unidadNegocio : {
        type: Schema.Types.ObjectId,
        ref: 'UnidadNegocio',
        required: true,
    },
    tipoServicio : {
        type: Schema.Types.ObjectId,
        ref: 'Actividad',
        required: true,
    },
    descripcionServicio : {
        type: String,
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    membresia: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro',
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

ProyectoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

ProyectoSchema.pre('save', function (next) {
    const proyecto = this;
    Counter.findByIdAndUpdate(
        { _id: 'proyectoId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            proyecto.codigo = counter.count.toString().padStart(10, '0');
            next();
        }
    );
});

module.exports = model( 'Proyecto', ProyectoSchema)