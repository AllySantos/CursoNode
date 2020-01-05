const mongoose = require('mongoose');

const teste = mongoose.model('Product');

//vai retornar (ou exportar) esse negocio aq

module.exports = {

    async listagem(rec, res){
        const AllProducts = await teste.find();

        return res.json(AllProducts);
    }
};