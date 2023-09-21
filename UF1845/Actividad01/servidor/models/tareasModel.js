const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TareasSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    puntuacion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    importancia: {
        type: String,
        required: true
    }    
});

//Exportamos el modelo  

module.export = mongoose.model('Tareas', TareasSchema);