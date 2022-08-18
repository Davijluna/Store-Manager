const productModels = require('../models/productModels');

const validyProduct = async (req, res, next) => {
  const { params: { id } } = req;
  const result = await productModels.getId(id);

  if (!result) return res.status(404).json({ message: 'Product not found' });
  next();
};

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const nameProductLength = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = { validyProduct, nameValidation, nameProductLength };