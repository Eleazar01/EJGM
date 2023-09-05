const express = require('express')

const initDB = require('./config/dbase')

const app = express()

const port = 3001

const userRouter = require('./routes/user')

// app.get('/',(req,res)=>{

//     res.send({
//         data: 'Hola Mundo'
//     })


// })

app.use(userRouter)

app.listen(port, () =>{
    console.log('En linea !!!')
})

initDB()


