const express = require('express')

const app = express()

const port = 3001

app.get('/',(req,res)=>{

    res.send({
        data: 'Hola Mundo'
    })

    // req.

})



// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost/EmployeeDB";
// MongoClient.connect(url, function(err, db) {
//     var cursor = db.collection("Employee").find();
//         cursor.each(function(err, doc) {
//         console.log(doc);
//     });
// });