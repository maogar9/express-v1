const modelo = require('../model/m_user')

exports.getData = (req,res) =>{
    //res.send('hola desde complemento')
    modelo.find({}, (err, docs) =>{
        res.send({docs})
    })
}

exports.insertData = (req,res) =>{
    const data = req.body
    //res.send({data}) // prueba del post
    //modelo.create(data, (err, docs) =>{
    modelo.collection.insertOne(data, (err, docs) =>{
        if(err){
            console.log('error', err)
            res.send({error: err}, 800)
        }else{
            res.send({data: docs})
        }
    })
}