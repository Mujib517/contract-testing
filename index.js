const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on ", PORT));

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send("Express API"));

app.get('/health', (req, res) => res.status(200).json({ status: 'Up' }));

const products = [{ id: 1, name: 'Apple', price: 1000, instock: true },
{ id: 2, name: 'Apple', price: 1000, instock: true },
{ id: 3, name: 'Apple', price: 900, instock: true },
{ id: 4, name: 'Apple', price: 1000, instock: true }];

app.get('/api/products', (req, res) => res.status(200).json(products));

const isValidProduct = (product) => product.id && product.name && product.price

app.post('/api/products', (req, res) => {
    if (isValidProduct(req.body)) {
        products.push(req.body);
        res.status(201).send();
    } else res.status(400).send();
});