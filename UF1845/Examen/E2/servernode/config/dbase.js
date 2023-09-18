const mongoose = require('mongoose')


module.exports = ()=> {
    const connect = () =>{
        mongoose.connect(DB_URI,
            {
                keepAlive: true,
                useNewUrlParse: true,
                useUnifieldTopology: true
            }
        ).then(()=> {
            console.log('Conexión Directa')
        })
        .catch((err)=>{
            console.log('DB: ERROR!!')
        })
    }

    connect()

}