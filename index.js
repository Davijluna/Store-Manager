const app = require('./app');
require('dotenv').config();

require('express-async-errors');///

const productFunctions = require('./controllers/productController');

app.get('/products', productFunctions.getAll);

app.get('/products/:id', productFunctions.getId);

app.post('/products', productFunctions.NewProducts);

app.delete('/products/:id', productFunctions.DeletProductor);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use((err, _req, res, _next) => {
  res.status(500).json({ erro: err.message }); ///
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
