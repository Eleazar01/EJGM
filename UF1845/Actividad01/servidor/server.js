// buscar librerias que nos hacen falta
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const conectarDB = require('./db');

const app = express();

conectarDB()

app.use(cors());
app.use(express.json());
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/mensaje', require('./routes/mensajeRoutes'));
app.use('/api/curso', require('./routes/cursoRoutes'));
app.use('/api/tareas', require('./routes/tareasRoutes'));

app.listen(3700), () => console.log('Servidor en linea');

