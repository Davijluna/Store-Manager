const productModels = require('../models/productModels');

// requisito 1 A
const getAll = async () => {
  const result = await productModels.getAll();
  if (!result || result.length === 0) {
    return {
      error: { message: 'Product not found' }, code: 404,
    };
  }
  return { data: result, code: 200 };
};

// requisito 1 B
const getId = async ({ id }) => {
  const result = await productModels.getId(id);
  return { data: result, code: 200 };
};

const NewProducts = async (body) => {
  const { name } = body;
  
  if (!name) {
 return {
    error: { message: '"name" is required' }, code: 400,
    }; 
  }
  if (name.length < 5) {
    return {
      error: { message: '"name" length must be at least 5 characters long' },
      code: 422,
    };
  }
  const result = await productModels.NewProducts(name);
  return { data: result, code: 201 };
};

// requisito 6
const ValidCadastryProducts = async (body) => {
  const { productId, quantity } = body;
  console.log(body);
  if (!productId) {
    return { error: { message: '"productId" is required' }, code: 400 };
  }
  if (!quantity) {
    return { error: { message: '"quantity" is required' } };
  }
  const result = await productModels.ValidCadastryProducts(body);
  return { data: result, code: 201 };
};
 
// requisito 10
const UpdataProductos = async (req) => {
  const { id } = req.params;
  const { name } = req.body;
  await productModels.UpdataProductos(name, id);
  const result = { id, name };
  return { data: result, code: 200 };
};
// requisito 12
const DeletProductor = async ({ id }) => {
  const result = await productModels.getId(id);
  if (!result) {
    return { error: { message: 'Product not found' }, code: 404 };
  } 
  await productModels.DeletProductor(id);
    return { code: 204 };
};

module.exports = {
  getAll,
  getId,
  NewProducts,
  ValidCadastryProducts,
  UpdataProductos,
  DeletProductor,
};
