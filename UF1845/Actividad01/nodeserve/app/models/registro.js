const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    direccion2: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
    },
    pais: {
        type: String,
    },
    postal: {
        type: Number,
    },
    profesor: {
        type: boolean,
        required: true
    },
});

module.exports = mongoose.model('Registro', RegistroSchema);