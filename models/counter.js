const { Schema, model } = require('mongoose')

const CounterSchema = Schema({
    _id: { type: String, required: true },
    count: { type: Number, default: 0 }
})

module.exports = model( 'Counter', CounterSchema)