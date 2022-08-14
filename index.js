const app = require('./app');
require('dotenv').config();

const productFunctions = require('./controllers/productController');

app.get('/products', productFunctions.getAll);

app.get('/products/:id', productFunctions.getId);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
