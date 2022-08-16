const productServices = require('../services/productServices');

const getAll = async (_req, res) => {
  const { data, error, code } = await productServices.getAll();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

const getId = async (req, res) => {
  const { data, error, code } = await productServices.getId(req.params);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

const NewProducts = async (req, res) => {
  const { data, error, code } = await productServices.NewProducts(req.body);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

// const { id } = req.params;
//   const resultado = await productServices.getId(id);
//   if (!resultado) {
//     return res.status(404)
//       .json({ message: 'Product not found' });
// }
//  res.status(200).json(resultado);
// } catch (erro) {
//   next('error');
// }
//   if (!name) {
//     return { code: 400, message: { message: '"name" not definit' } };
//   }
// const result = await productServices.NewProducts(name);
// return { code: 201, message: result[0] };
module.exports = { getAll, getId, NewProducts };