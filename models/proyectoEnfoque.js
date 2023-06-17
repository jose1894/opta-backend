const { Schema, model } = require('mongoose')

const ProyectoEnfoqueSchema = Schema({
    enfoque: {
        type: Schema.Types.ObjectId,
        ref: 'Enfoque'
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto'
    },
})

ProyectoEnfoqueSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'ProyectoEnfoque', ProyectoEnfoqueSchema)