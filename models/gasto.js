const { Schema, model } = require('mongoose');

const GastoSchema = Schema({
    concepto: {
        type: String,
        required: [ true, 'El concepto es obligatorio'],
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
 GastoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Gasto', GastoSchema);