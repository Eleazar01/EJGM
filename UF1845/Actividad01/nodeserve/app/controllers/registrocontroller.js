const registro = require("../models/registro");

exports.crearregistro = async (req, res) => {
    try {
        let registro;
        // Creamos nuestro registro
        registro = new registro(req.body);
        await registro.save();
        res.send(registro);      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerregistros = async (req, res) => {
    try {
        const registros = await registro.find();
        res.json(registros)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarregistro = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, duracion, temas} = req.body;
        let registro = await registro.findById(req.params.id);
        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }
        registro.nombre = nombre;
        registro.descripcion = descripcion;
        registro.categoria = categoria;
        registro.duracion = duracion;
        registro.temas = temas;
        registro = await registro.findOneAndUpdate({ _id: req.params.id },registro, { new: true} )
        res.json(registro);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerregistro = async (req, res) => {
    try {
        let registro = await registro.findById(req.params.id);
        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }     
        res.json(registro);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarregistro = async (req, res) => {
    try {
        let registro = await registro.findById(req.params.id);
        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }    
        await registro.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'registro eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}