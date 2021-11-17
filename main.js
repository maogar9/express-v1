const express = require('express')
const rutass = require('./app/rutas/user')
const app = express() // contiene nuestra app - hace el instanciaminento de express
const port = 5001 // puerto por donde corre mi app

app.use(rutass)
//app.get('/', (req,res) =>{ //cuando mi app sea llamada por get y ruta raiz "/" ejecuta esto:
//    res.send({data: 'hola mundo'})
//})

app.listen(port, () =>{ //estoy indicando que corre por el puerto 5001 y que cuando eso paseme muestre esto:
    console.log('app esta ok');
})

