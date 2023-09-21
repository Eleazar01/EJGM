const Mensaje = require('../models/mensajeModel');

exports.crearMensajes = async (req, res) => {
    
    try {
        let mensaje
        mensaje = new Mensaje(req.body)
        await mensaje.save()
        res.send(mensaje)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerMensajes = async (req, res) => {
    
    try {
        const tareas = await Mensaje.find()
        res.json(tareas)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.obtenerMensaje = async (req, res) => {
    
    try {
        let mensaje = await Mensaje.findById(req.params.id)
        if(!mensaje){
            res.status(404).json({msg:'El mensaje no existe'})
        }
        res.json(mensaje)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.actualizarMensaje = async (req, res) => {
    
    try {
        const {remite, mail, asunto, text} = req.body
        let mensaje = await Mensaje.findById(req.params.id)
        if(!mensaje){
            res.status(404).json({msg:'Mensaje no encontrado'})
        }
        mensaje.remite = remite
        mensaje.mail = mail
        mensaje.asunto = asunto
        mensaje.text = text
        mensaje = await Mensaje.findOneAndUpdate({_id: req.params.id}, mensaje, {new: true})
        res.json(mensaje)

    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.eliminarMensaje = async (req, res) => {
    
    try {
        let mensaje = await Mensaje.findById(req.params.id)
        if(!mensaje){
            res.status(404).json({msg:'El mensaje no existe'})
        }
        await Mensaje.findOneAndRemove({_id: req.params.id})
        res.json({msg:'Mensaje eliminado'})
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
