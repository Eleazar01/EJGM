const mongoose = require('mongoose');

const ContactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    asunto: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    tema: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contacto', ContactoSchema);