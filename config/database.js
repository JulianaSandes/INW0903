const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://userAdmin:tom505160@fiaptecnico.vknqm.mongodb.net/fiap?retryWrites=true&w=majority')
    //conexão local
    //mongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
