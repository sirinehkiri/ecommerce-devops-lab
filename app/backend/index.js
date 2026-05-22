const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>E-Commerce Store</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
          h1 { color: #333; }
          .product { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .price { color: green; font-weight: bold; font-size: 1.2em; }
        </style>
      </head>
      <body>
        <h1>E-Commerce Store</h1>
        <div class="product">
          <h2>Laptop</h2>
          <p class="price">$1200</p>
        </div>
        <div class="product">
          <h2>Phone</h2>
          <p class="price">$800</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
