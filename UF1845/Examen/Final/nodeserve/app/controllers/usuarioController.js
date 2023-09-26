const Usuario = require("../models/UsuarioModel");

// Guardar

exports.crearUsuario = async (req, res) => {

    try {
        let usuario;

        // Creamos nuestro usuario
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Listar varios

exports.obtenerUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();
        res.json(usuarios)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

//Editar

exports.actualizarUsuario = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        usuario.nombre = nombre;
        usuario.categoria = categoria;
        usuario.ubicacion = ubicacion;
        usuario.precio = precio;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id },usuario, { new: true} )
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Mostrar uno

exports.obtenerUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Eliminar

exports.eliminarUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}