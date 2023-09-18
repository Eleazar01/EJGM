const registro = require("../models/registro");

exports.crearRegistro = async (req, res) => {
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
exports.obtenerRegistros = async (req, res) => {
    try {
        const registros = await registro.find();
        res.json(registros)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarRegistro = async (req, res) => {
    try {
        const { nombre, apellidos, email, password, direccion, direccion2,telefono, ciudad, pais, cpostal, profesor} = req.body;
        let registro = await registro.findById(req.params.id);
        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }
        registro.nombre = nombre;
        registro.apellidos = apellidos;
        registro.email = email;
        registro.password = password;
        registro.direccion = direccion;
        registro.direccion2 = direccion2;
        registro.telefono = telefono;
        registro.ciudad = ciudad;
        registro.pais = pais;
        registro.cpostal = cpostal;
        registro.profesor = profesor;
        registro = await registro.findOneAndUpdate({ _id: req.params.id },registro, { new: true} )
        res.json(registro);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerRegistro = async (req, res) => {
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
exports.eliminarRegistro = async (req, res) => {
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