const express = require('express')

const app = express()

const port = 3001

app.listen(port, () =>{
    console.log('En linea !!!')
})

const userRouters = require('./routes/user')
app.use(userRouters)

const cursosRouters = require('./routes/cursos')
app.use(cursosRouters)

// const PevaluaRouters = require('./routes/pevalua')
// app.use(PevaluaRouters)
//Conexion con base datos


const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/Appweb',{
    useNewUrlParser: true
})

.then(()=>{
    console.log('Conexion establecida...')
})

.catch(err => console.log(err))



