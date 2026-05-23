const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/ecommerce')
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.log('Erreur MongoDB:', err));

const Product = mongoose.model('Product', {
  name: String,
  price: Number
});

async function initData() {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany([
      { name: 'Laptop', price: 1200 },
      { name: 'Phone', price: 800 }
    ]);
  }
}
initData();

app.get('/', async (req, res) => {
  const products = await Product.find();
  let html = `<html><head><title>E-Commerce Store</title>
    <style>
      body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
      h1 { color: #333; }
      .product { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
      .price { color: green; font-weight: bold; font-size: 1.2em; }
    </style></head><body><h1>E-Commerce Store</h1>`;
  products.forEach(p => {
    html += `<div class="product"><h2>${p.name}</h2><p class="price">$${p.price}</p></div>`;
  });
  html += `</body></html>`;
  res.send(html);
});

app.listen(3000, () => console.log('Server running on port 3000'));
