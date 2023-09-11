const mongoose = require ('mongoose')

const PevaluaSchema = new mongoose.Schema(
    {
        _id: {
            type: String
        },
        nombre: {
            type: String,
            required: true
        },
        apellidos: {
            type: String
        },
        idTarea: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        puntuacion: {
            type: Number
        },
        estado: {
            type: Boolean
        }        
    }
)

module.exports = mongoose.model('pevalua', PevaluaSchema)