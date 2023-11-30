const { Schema, model } = require('mongoose')

const ProyectosViewSchema = Schema({}, { collection: 'proyectosView' })
module.exports = model( 'ProyectosView', ProyectosViewSchema)