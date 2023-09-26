const Usuario = require('../models/usuarioModel');

exports.crearUsuarios = async (req, res) => {
    
    try {
        let usuario
        usuario = new Usuario(req.body)
        await usuario.save()
        res.send(usuario)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUsuarios = async (req, res) => {
    
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.obtenerUsuario = async (req, res) => {
    
    try {
        let usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            res.status(404).json({msg:'El usuario no existe'})
        }
        res.json(usuario)
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.actualizarUsuario = async (req, res) => {
    
    try {
        const {nombre, apellidos, Fnacimiento, email, telefono, foto, pass, tipo} = req.body
        let usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            res.status(404).json({msg:'Usuario no encontrado'})
        }
        usuario.nombre = nombre
        usuario.apellidos = apellidos
        usuario.Fnacimiento = Fnacimiento
        usuario.email = email
        usuario.telefono = telefono
        usuario.foto = foto
        usuario.pass = pass
        usuario.tipo = tipo
        usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, {new: true})
        res.json(usuario)

    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
    
exports.eliminarUsuario = async (req, res) => {
    
    try {
        let usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            res.status(404).json({msg:'El usuario no existe'})
        }
        await Usuario.findOneAndRemove({_id: req.params.id})
        res.json({msg:'Usuario eliminado'})
    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
