const Tarea = require('../models/tareaModel');

exports.crearTareas = async (req, res) => {
    
    try {
        let tarea
        tarea = new Tarea(req.body)
        await tarea.save()
        res.send(tarea)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerTareas = async (req, res) => {
    
    try {
        const tareas = await Tarea.find()
        res.json(tareas)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.obtenerTarea = async (req, res) => {
    
    try {
        let tarea = await Tarea.findById(req.params.id)
        if(!tarea){
            res.status(404).json({msg:'El tarea no existe'})
        }
        res.json(tarea)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.actualizarTarea = async (req, res) => {
    
    try {
        const {nombre, descripcion, puntuacion, estado, importancia} = req.body
        let tarea = await Tarea.findById(req.params.id)
        if(!tarea){
            res.status(404).json({msg:'Tarea no encontrado'})
        }
        tarea.nombre = nombre
        tarea.descripcion = descripcion
        tarea.puntuacion = puntuacion
        tarea.estado = estado
        tarea.importancia = importancia
        tarea = await Tarea.findOneAndUpdate({_id: req.params.id}, tarea, {new: true})
        res.json(tarea)

    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.eliminarTarea = async (req, res) => {
    
    try {
        let tarea = await Tarea.findById(req.params.id)
        if(!tarea){
            res.status(404).json({msg:'El tarea no existe'})
        }
        await Tarea.findOneAndRemove({_id: req.params.id})
        res.json({msg:'Tarea eliminado'})
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
