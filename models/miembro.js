const { Schema, model } = require('mongoose');
const Counter = require('./counter');

const MiembroSchema = Schema({
    aliado: {
        type: Schema.Types.ObjectId,
        ref: 'Aliado',
        default: null,
    },
    codigo: {
        type: String
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
    ejercicioFiscal: {
        type: String,
        uppercase: true,
        trim: true,
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
    tipoContacto : {
        type: Number,
        default: 1,
        enum: [1,2],
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
   /* codigoActivacion: {
        type: String,
        maxLength: [30, 'La Longitud máxima es de 250 caracteres']
    }, 
    licencias: {
        type: String,
        maxLength: [30, 'La Longitud máxima es de 250 caracteres']
    },  
    vigencia: {
        type: Date,
        required: true
    }, 
    moneda: {
        type: Schema.Types.ObjectId,
        ref: 'Moneda',
        required: true
    }, 
    periodoRevision: {
        type: Number,
        required: true
    }, 
    creacion: {
        type: Number,
        default: 1,
        enum: [1,2],
    }, 
    declaracionHoras: {
        type: Number,
    }, 
    modificacionHoras: {
        type: Number,
    },
    requiereAprobacion: {
        type: String,
         required: true
    },*/  
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

MiembroSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

MiembroSchema.pre('save', function (next) {
    const miembro = this;
    Counter.findByIdAndUpdate(
        { _id: 'miembroId' },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
        function (error, counter) {
            if (error) return next(error);
            miembro.codigo = counter.count.toString().padStart(4, '0');
            next();
        }
    );
});

module.exports = model( 'Miembro', MiembroSchema);