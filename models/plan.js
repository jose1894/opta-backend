const { Schema, model } = require('mongoose')

const PlanSchema = Schema({
    descripcion: {
        type: String
    },
    dias: {
        type: Number,
        default: 1
    },
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2]
    },

})

PlanSchema.methods.toJSON = function() {
    const {__v, estado, ...data } = this.toObject()
    return data
}

module.exports = model( 'Plan', PlanSchema)