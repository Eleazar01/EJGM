const User = require('../models/pevalua')

const fs = require('fs');
const path = require('path');
const pevalua = require('../models/pevalua');

const controller = {
    home: function (req,res) {
        return res.status(200).send({
            message: 'Soy home de pevalua'
        });
    },
    test: function (req,res) {
        return res.status(200).send({
            message: 'Soy el metodo o acción test del controlador de pevalua'
        });
    },
    saveEvalua: function (req,res) {
        const pevalua = new Model();
        const params = req.body;
        pevalua.nombre = params.nombre;
        pevalua.apellidos = params.apellidos;
        pevalua.idTarea = params.idTarea;
        pevalua.description = params.description;
        pevalua.puntuacion = params.puntuacion;
        pevalua.estado = params.estado;

        pevalua.save((err,pevaluaStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
            if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar.'});
            return res.status(200).send({pevalua: pevaluaStored});
        });
    },
    getEvalua: function (req,res) {
        var pevaluaId = req.params.id;

        if(pevaluaId == null) return res.status(404).send({message: 'El pevalua no existe.'});

        User.findById(pevaluaId, (err, pevalua)=>{
            if (err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!pevalua) return res.status(404).send({message: 'El pevalua no existe.'});

            return res.status(200).send({
                pevalua
            });
        });   
    },

    getEvalua: function (req,res) {
        User.find({}).sort('-description').exec((err, pevalua)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message: 'No hay usuarios ue mostrar'});
            return res.status(200).send({projects});
        });
    },

    updateEvalua: function (req,res) {
        var pevaluaId = req.params.id;
        var update = req.body;
        pevalua.findByIdAndUpdate(pevaluaId, update, {new: true}, (err, pevaluaUpdate)=>{
            if (err) return res.status(500).send({message: 'Error al actualizar'});
            if (!pevaluaUpdate) return res.status(404).send({message: 'No existe el pevalua para actualizar'});
            return res.status(200).send({
                pevalua: pevaluaUpdate
            });
        });
    },

    deleteEvalua: function (req, res) {

        var pevaluaId = req.params.id;

        User.findByIdAndRemove(pevaluaId, (err, pevaluaRemoved)=>{
            if (err) return res.status(500).send({message: 'No se ha podido borrar el pevalua'});
            if (!pevaluaRemoved) return res.status(404).send({message: 'No se puede eliminar ese pevalua'});
            return res.status(200).send({
                pevalua: pevaluaRemoved
            });
        });
    },

};

module.exports = controller;
