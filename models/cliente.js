const { Schema, model } = require('mongoose');
const Counter = require('./counter');

const ClienteSchema = Schema({
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
    iDFiscal: {
        type: String,
        uppercase: true,
        trim: true,
        unique: true,
        maxLength: [12,'La longitud máxima es de 12 caracteres']
    },
    industria: {
        type: Schema.Types.ObjectId,
        ref: 'Industria',
    },
    companiaListada : {
        type: Number,
        default: 1,
        enum: [1,2]
    },
    companiaRegulada : {
        type: Number,
        default: 1,
        enum: [1,2]
    },
    casaMatriz: {
        type: String,
        maxLength: [250,'La longitud máxima es de 12 caracteres']
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
    direccion: {
        type: String,
        uppercase: true,
        trim: true,
        maxLength: [250,'La longitud máxima es de 250 caracteres']
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2],
        required: true,
    },
    miembro: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

ClienteSchema.index({nombre: 'text' });

ClienteSchema.virtual('nombreCompleto').get(function () {
    return `${this.nombre}`;
});

ClienteSchema.set('toObject', { virtuals: true });
ClienteSchema.set('toJSON', { virtuals: true });

ClienteSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

ClienteSchema.pre('save', function (next) {
    const cliente = this;
    Counter.findByIdAndUpdate(
        { _id: 'clienteId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            cliente.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});



module.exports = model( 'Cliente', ClienteSchema);