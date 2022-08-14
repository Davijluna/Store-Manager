const productModels = require('../models/productModels');

const getAll = async () => {
  const result = await productModels.getAll();
  return result;
};

const getId = async (id) => {
  const result = await productModels.getId(id);
  return result;
};

module.exports = { getAll, getId };
