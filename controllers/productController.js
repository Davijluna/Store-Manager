const productServices = require('../services/productServices');

// requisito 1 A
const getAll = async (_req, res) => {
  const { data, error, code } = await productServices.getAll();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

// requisito 1 B
const getId = async (req, res) => {
  const { data, error, code } = await productServices.getId(req.params);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

// requisito 2 e 4
const NewProducts = async (req, res) => {
  const { data, error, code } = await productServices.NewProducts(req.body);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

// requisito 6
const ValidCadastryProducts = async (req, res) => {
  const { data, error, code } = await productServices.ValidCadastryProducts(req.params);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

// requisito 10
const UpdataProductos = async (req, res) => {
  const { data, error, code } = await productServices.UpdataProductos(req);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

// requisito 12
const DeletProductor = async (req, res) => {
  const { data, error, code } = await productServices.DeletProductor(req.params);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

module.exports = {
  getAll,
  getId,
  NewProducts,
  DeletProductor,
  ValidCadastryProducts,
  UpdataProductos,
}; 