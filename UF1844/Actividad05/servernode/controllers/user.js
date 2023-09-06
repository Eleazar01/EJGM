const model = require('../models/user')

const fs = require('fs');
const path = require('path');
// const { param } = require('../routes/user');

const controller = {
    home: function (req,res) {
        return res.status(200).send({
            message: 'Soy home'
        });
    },
    test: function (req,res) {
        return res.status(200).send({
            message: 'Soy el metodo o acción test del controlador de user'
        });
    },
    saveUser: function (req,res) {
        const user = new Model();
        const params = req.body;
        user.name = params.name;
        user.description = params.description;
        user.category = params.category;
        user.year = params.year;
        user.lang = params.langs;+
        user.save((err,userStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
            if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar.'});
            return res.status(200).send({user: userStored});
        });
    },
    getUser: function (req,res) {
        var userId = req.params.id;

        if(userId == null) return res.status(404).send({message: 'El usuario no existe.'});

        User.findById(userId, (err, user)=>{
            if (err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!user) return res.status(404).send({message: 'El usuario no existe.'});

            return res.status(200).send({
                user
            });
        });   
    },

    getUsers: function (req,res) {
        User.find({}).sort('-year').exec((err, users)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message: 'No hay usuarios ue mostrar'});
            return res.status(200).send({projects});
        });
    },

    updateUser: function (req,res) {
        var userId = req.params.id;
        var update = req.body;
        User.findByIdAndUpdate(userId, update, {new: true}, (err, userUpdate)=>{
            if (err) return res.status(500).send({message: 'Error al actualizar'});
            if (!userUpdate) return res.status(404).send({message: 'No existe el usuario para actualizar'});
            return res.status(200).send({
                user: userUpdate
            });
        });
    },

    deleteUser: function (req, res) {

        var userId = req.params.id;

        User.findByIdAndRemove(userId, (err, userRemoved)=>{
            if (err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});
            if (!userRemoved) return res.status(404).send({message: 'No se puede eliminar ese usuario'});
            return res.status(200).send({
                user: userRemoved
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
