const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();


//primeira rota
app.get('/', function (req, res){ //toda vez q acessar o diretorio raiz (/)

    res.send("sssa");
})
//conexao o bamco
async function coneta(){

     try {
            await mongoose.connect('mongodb+srv://adm:adm@node-s2awl.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true});

    } catch (error) {
        console.log(error)
    }

}

coneta();

//ouve a porta 3001

app.listen(3001);