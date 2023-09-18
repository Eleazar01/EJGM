const contacto = require("../models/contacto");

exports.crearContacto = async (req, res) => {
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
exports.obtenerContacto = async (req, res) => {
    try {
        const contactos = await contacto.find();
        res.json(contactos)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarContacto = async (req, res) => {
    try {
        const { nombre, asunto, email, tema, texto} = req.body;
        let contacto = await contacto.findById(req.params.id);
        if(!contacto) {
            res.status(404).json({ msg: 'No existe el contacto' })
        }
        contacto.nombre = nombre;
        contacto.asunto = asunto;
        contacto.email = email;
        contacto.tema = tema;
        contacto.texto = texto;
        contacto = await contacto.findOneAndUpdate({ _id: req.params.id },contacto, { new: true} )
        res.json(contacto);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerContacto = async (req, res) => {
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
exports.eliminarContacto = async (req, res) => {
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