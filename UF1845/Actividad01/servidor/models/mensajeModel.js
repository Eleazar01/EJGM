const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MensajeSchema = new Schema({
    remite: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    asunto: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    } 
});

//Exportamos el modelo  

module.export = mongoose.model('Mensaje', MensajeSchema);