const mongoose = require ('mongoose')

const CursosSchema = new mongoose.Schema(
    {
        tipo: {
            type: String
        },
        nombre: {
            type: String
        },
        duracion: {
            type: Number
        }
        
    }
)

module.exports = mongoose.model('cursos', CursosSchema)