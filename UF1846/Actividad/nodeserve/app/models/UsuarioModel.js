const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    Fnacimiento: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
    
});

//Exportamos el modelo  

module.export = mongoose.model('Usuario', UsuarioSchema);