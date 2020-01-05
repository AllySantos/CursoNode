const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');


routes.get("/products", ProductController.listagem);

module.exports = routes;