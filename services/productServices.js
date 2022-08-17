const productModels = require('../models/productModels');

const getAll = async () => {
  const result = await productModels.getAll();
  if (!result || result.length === 0) {
    return {
      error: { message: 'Product not found' }, code: 404,
    };
  }
  return { data: result, code: 200 };
};

const getId = async ({ id }) => {
  const result = await productModels.getId(id);
  if (!result) return { error: { message: 'Product not found' }, code: 404 };
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

const DeletProductor = async ({ id }) => {
  const result = await productModels.getId(id);
  if (!result) {
    return { error: { message: 'Product not found' }, code: 404 };
  } 
  await productModels.DeletProductor(id);
    return { code: 204 };
};

module.exports = { getAll, getId, NewProducts, DeletProductor };
