const model = require('../models/cursos')

const fs = require('fs');
const path = require('path');
const cursos = require('../models/cursos');

const controller = {
    home: function (req,res) {
        return res.status(200).send({
            message: 'Soy home de cursos'
        });
    },
    test: function (req,res) {
        return res.status(200).send({
            message: 'Soy el metodo o acción test del controlador de cursos'
        });
    },
    saveCursos: function (req,res) {
        const cursos = new Model();
        const params = req.body;
        cursos.name = params.name;
        cursos.description = params.description;
        cursos.category = params.category;
        cursos.year = params.year;
        cursos.lang = params.langs;
        cursos.save((err,cursosStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
            if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar.'});
            return res.status(200).send({cursos: cursosStored});
        });
    },
    getCurso: function (req,res) {
        var cursosId = req.params.id;

        if(cursosId == null) return res.status(404).send({message: 'El curso no existe.'});

        User.findById(cursosId, (err, cursos)=>{
            if (err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!cursos) return res.status(404).send({message: 'El curso no existe.'});

            return res.status(200).send({
                cursos
            });
        });   
    },

    getCursos: function (req,res) {
        User.find({}).sort('-year').exec((err, cursos)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message: 'No hay usuarios ue mostrar'});
            return res.status(200).send({projects});
        });
    },

    updateCursos: function (req,res) {
        var cursosId = req.params.id;
        var update = req.body;
        cursos.findByIdAndUpdate(cursosId, update, {new: true}, (err, cursosUpdate)=>{
            if (err) return res.status(500).send({message: 'Error al actualizar'});
            if (!cursosUpdate) return res.status(404).send({message: 'No existe el curso para actualizar'});
            return res.status(200).send({
                cursos: cursosUpdate
            });
        });
    },

    deleteCursos: function (req, res) {

        var cursosId = req.params.id;

        User.findByIdAndRemove(cursosId, (err, cursosRemoved)=>{
            if (err) return res.status(500).send({message: 'No se ha podido borrar el curso'});
            if (!cursosRemoved) return res.status(404).send({message: 'No se puede eliminar ese curso'});
            return res.status(200).send({
                cursos: cursosRemoved
            });
        });
    },

};

module.exports = controller;



// res.send({data: 'Esto viene de Rutas'})

// exports.getData = (req,res)=>{
//     model.find({}, (err, docs)=>{
//         res.send({
//         docs: docs
//         })
//     }) 
// }
