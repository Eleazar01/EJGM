const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()

conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/cursos', require('../app/routes/cursoroutes'));
// app.use('/api/registros', require('../app/routes/registro'));
app.use('/api/contactos', require('../app/routes/contacto'));

app.listen(3700, () => {
    console.log('El servidor esta corriendo perfectamente')
})