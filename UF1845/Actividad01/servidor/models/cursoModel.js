const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    temas: {
        type: String,
        required: true
    }
    
});

//Exportamos el modelo  

module.export = mongoose.model('Curso', CursoSchema);