const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        apellidos: {
            type: String
        },
        edad: {
            type: Number
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        matriculado: {
            type: Boolean,
            required: true
        },
        profesor: {
            type: Boolean,
            required: true
        },
        avatar: {
            type: String,
            
        }
        
    }
)

module.exports = mongoose.model('user', UserSchema)