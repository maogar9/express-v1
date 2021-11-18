const mongoose = require('mongoose')
const db_url = 'mongodb://127.0.0.1:27017/app_82' //ruta conexion mongodb

//modulo de exportacion:
module.exports = () =>{ //funcion que contiene la conexion a mongodb
    const conex = () =>{
        mongoose.connect(
            db_url,
            {
                keepAlive: true,
                useNewUrlparser: true,
                useUnifiedTopology: true
            },
            (error) =>{
                if (error){
                    console.log('Existe un error en la conexion' + error);
                }else{
                    console.log('La conexion fue exitosa');
                }
            }
        )
    }
    conex();
}