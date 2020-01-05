const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//Permite o envio de dados no formato JSON
app.use(express.json());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/bancoNode', {useNewUrlParser:true, useUnifiedTopology:true});

//chama o model
require('./src/models/Product');

//rotas
app.use('/api', require('./src/routes'));

//ouve a porta 3001
app.listen(3001);