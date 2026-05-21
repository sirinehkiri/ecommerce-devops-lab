const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Mini Projet DevOps OK');
});

app.listen(3000, () => {
  console.log('Server running');
});
