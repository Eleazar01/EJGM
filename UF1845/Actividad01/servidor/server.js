// buscar librerias que nos hacen falta
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const conectarDB = require('./db');

const app = express();

conectarDB()

app.use(cors());
app.use(express.json());

app.listen(3700), () => console.log('Servidor en linea');

