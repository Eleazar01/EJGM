const tareas = require("../models/tareas");

exports.creartareas = async (req, res) => {
    try {
        let tareas;
        // Creamos nuestro tareas
        tareas = new tareas(req.body);
        await tareas.save();
        res.send(tareas);      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenertareass = async (req, res) => {
    try {
        const tareass = await tareas.find();
        res.json(tareass)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizartareas = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, duracion, temas} = req.body;
        let tareas = await tareas.findById(req.params.id);
        if(!tareas) {
            res.status(404).json({ msg: 'No existe el tareas' })
        }
        tareas.nombre = nombre;
        tareas.descripcion = descripcion;
        tareas.categoria = categoria;
        tareas.duracion = duracion;
        tareas.temas = temas;
        tareas = await tareas.findOneAndUpdate({ _id: req.params.id },tareas, { new: true} )
        res.json(tareas);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenertareas = async (req, res) => {
    try {
        let tareas = await tareas.findById(req.params.id);
        if(!tareas) {
            res.status(404).json({ msg: 'No existe el tareas' })
        }     
        res.json(tareas);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminartareas = async (req, res) => {
    try {
        let tareas = await tareas.findById(req.params.id);
        if(!tareas) {
            res.status(404).json({ msg: 'No existe el tareas' })
        }    
        await tareas.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'tareas eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}