const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/dbase')
const cors = require("cors")

// Creamos el servidor
const app = express()

conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/cursos', require('../servernode/routes/cursos'));
app.use('/api/pevalua', require('../servernode/routes/pevalua'));


app.listen(3001, () => {
    console.log('El servidor esta corriendo perfectamente')
})