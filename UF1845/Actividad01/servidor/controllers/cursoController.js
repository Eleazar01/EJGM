const Curso = require('../models/cursoModel');

exports.crearCurso = async (req, res) => {
    
    try {
        let curso
        curso = new Curso(req.body)
        await curso.save()
        res.send(curso)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerCursos = async (req, res) => {
    
    try {
        const cursos = await Curso.find()
        res.json(cursos)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.obtenerCurso = async (req, res) => {
    
    try {
        let curso = await Curso.findById(req.params.id)
        if(!curso){
            res.status(404).json({msg:'El curso no existe'})
        }
        res.json(curso)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.actualizarCurso = async (req, res) => {
    
    try {
        const {nombre, descripcion, categoria, duracion, temas, imagen, pass} = req.body
        let curso = await Curso.findById(req.params.id)
        if(!curso){
            res.status(404).json({msg:'curso no encontrado'})
        }
        curso.nombre = nombre
        curso.descripcion = descripcion
        curso.categoria = categoria
        curso.duracion = duracion
        curso.temas = temas
        curso.imagen = imagen
        curso.pass = pass
        curso = await Curso.findOneAndUpdate({_id: req.params.id}, curso, {new: true})
        res.json(curso)

    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.eliminarCurso = async (req, res) => {
    
    try {
        let curso = await Curso.findById(req.params.id)
        if(!curso){
            res.status(404).json({msg:'El curso no existe'})
        }
        await Curso.findOneAndRemove({_id: req.params.id})
        res.json({msg:'curso eliminado'})
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
