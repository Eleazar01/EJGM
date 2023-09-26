const Curso = require("../models/CursoModel");

// Guardar

exports.crearCurso = async (req, res) => {
    try {
        let curso;
        // Creamos nuestro curso
        curso = new Curso(req.body);
        await curso.save();
        res.send(curso);      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Listar varios

exports.obtenerCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Editar

exports.actualizarCurso = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, imagen, duracion, temas} = req.body;
        let curso = await Curso.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el Curso' })
        }
        curso.nombre = nombre;
        curso.descripcion = descripcion;
        curso.categoria = categoria;
        curso.imagen = imagen;
        curso.duracion = duracion;
        curso.temas = temas;
        curso = await Curso.findOneAndUpdate({ _id: req.params.id },curso, { new: true} )
        res.json(curso);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Mostrar uno

exports.obtenerCurso = async (req, res) => {
    try {
        let curso = await Curso.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el Curso' })
        }     
        res.json(curso);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Eliminar

exports.eliminarCurso = async (req, res) => {
    try {
        let curso = await Curso.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el Curso' })
        }    
        await Curso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}