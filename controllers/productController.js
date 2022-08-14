const productServices = require('../services/productServices');

const getAll = async (_req, res, next) => {
  try {
    const resultado = await productServices.getAll();
    res.status(200)
      .json(resultado);
  } catch (erro) {
    next('error');
  }
};

const getId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const resultado = await productServices.getId(id);
    if (!resultado) {
      return res.status(404)
        .json({ message: 'Product not found' });
  }
   res.status(200).json(resultado);
  } catch (erro) {
    next('error');
  }
};

module.exports = { getAll, getId };