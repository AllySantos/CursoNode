//Schema = atrbutos

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    //Quais os campos que quer salvar lá no banco

    title :{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    url: {
        type:String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,    //Data se preenche com valor atual
    },

});


//App vai saber que existe essa classe
mongoose.model('Product', ProductSchema);