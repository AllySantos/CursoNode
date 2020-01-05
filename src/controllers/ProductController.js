const mongoose = require('mongoose');

const banco = mongoose.model('Product');

//vai retornar (ou exportar) esse negocio aq

module.exports = {

    async listagem(req, res){
        const AllProducts = await banco.find();

        return res.json(AllProducts);
    },

    async criacao(req, res){
        //Criação de produto
        const newProduct = await banco.create(req.body);

        return res.json(newProduct);
    },

    //Listar produto por id
    async mostra(req, res){
        const product  = await banco.findById(req.params.productId);

        return res.json(product);
    },

    //Atualizar

    async atualizar(req, res){
        const attProduct = await banco.findByIdAndUpdate(req.params.productId, req.body, {new: true});

        return res.json(attProduct);
    },


    //Deletar
    async deletar(req, res){
        const deleteProduct = await banco.findByIdAndRemove(req.params.productId);

        return res.send('Produto removido com sucesso');
        }
};