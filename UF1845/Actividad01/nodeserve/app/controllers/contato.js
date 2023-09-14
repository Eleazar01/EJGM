const contacto = require("../models/contacto");

exports.crearcontacto = async (req, res) => {
    try {
        let contacto;
        // Creamos nuestro contacto
        contacto = new contacto(req.body);
        await contacto.save();
        res.send(contacto);      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenercontactos = async (req, res) => {
    try {
        const contactos = await contacto.find();
        res.json(contactos)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarcontacto = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, duracion, temas} = req.body;
        let contacto = await contacto.findById(req.params.id);
        if(!contacto) {
            res.status(404).json({ msg: 'No existe el contacto' })
        }
        contacto.nombre = nombre;
        contacto.descripcion = descripcion;
        contacto.categoria = categoria;
        contacto.duracion = duracion;
        contacto.temas = temas;
        contacto = await contacto.findOneAndUpdate({ _id: req.params.id },contacto, { new: true} )
        res.json(contacto);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenercontacto = async (req, res) => {
    try {
        let contacto = await contacto.findById(req.params.id);
        if(!contacto) {
            res.status(404).json({ msg: 'No existe el contacto' })
        }     
        res.json(contacto);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarcontacto = async (req, res) => {
    try {
        let contacto = await contacto.findById(req.params.id);
        if(!contacto) {
            res.status(404).json({ msg: 'No existe el contacto' })
        }    
        await contacto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'contacto eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}