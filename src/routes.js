const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');


routes.get("/products", ProductController.listagem);
routes.post("/products", ProductController.criacao);
routes.get("/products/:productId", ProductController.mostra);
routes.put("/products/:productId", ProductController.atualizar);
routes.delete("/products/:productId", ProductController.deletar);

module.exports = routes;