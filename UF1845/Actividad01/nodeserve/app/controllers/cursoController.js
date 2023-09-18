const curso = require("../models/CursoModel");

exports.crearCurso = async (req, res) => {
    try {
        let curso;
        // Creamos nuestro curso
        curso = new curso(req.body);
        await curso.save();
        res.send(curso);      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerCursos = async (req, res) => {
    try {
        const cursos = await curso.find();
        res.json(cursos)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarCurso = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, duracion, temas} = req.body;
        let curso = await curso.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el curso' })
        }
        curso.nombre = nombre;
        curso.descripcion = descripcion;
        curso.categoria = categoria;
        curso.duracion = duracion;
        curso.temas = temas;
        curso = await curso.findOneAndUpdate({ _id: req.params.id },curso, { new: true} )
        res.json(curso);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerCurso = async (req, res) => {
    try {
        let curso = await curso.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el curso' })
        }     
        res.json(curso);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarCurso = async (req, res) => {
    try {
        let curso = await curso.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el curso' })
        }    
        await curso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}