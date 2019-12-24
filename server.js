const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/bancoNode', {useNewUrlParser:true, useUnifiedTopology:true});

//primeira rota
app.get('/', function (req, res){ //toda vez q acessar o diretorio raiz (/)

    res.send("sssa");
})
//conexao o bamco


//ouve a porta 3001

app.listen(3001);