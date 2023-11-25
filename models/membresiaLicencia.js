const { Schema, model } = require('mongoose')

const MembresiaLicenciaSchema = Schema({
    fechaInicio: {
        type: Date,
        required: [ true, 'La fecha es obligatorio'],
        default: Date.now,
    },
    fechaFinal: {
        type: Date,
        required: [ true, 'La fecha es obligatorio'],
        default: Date.now,
    },
    licencia: {
        type: String,
    },
    plan: {
        type: Schema.Types.ObjectId,
        ref: 'Plan',
    },
    membresia: {
        type: Schema.Types.ObjectId,
        ref: 'Miembro',
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

MembresiaLicenciaSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'MembresiaLicencia', MembresiaLicenciaSchema)