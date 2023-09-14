const mongoose = require('mongoose');

const TemaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    importancia: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    puntuacion: {
        type: Number,
    },
});

module.exports = mongoose.model('Tema', TemaSchema);