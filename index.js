const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es tu API!');
});

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});