const connection = require('./connection');

// getAll e getId requisito 1
const getAll = async () => {
  const [product] = await connection.execute('SELECT * FROM StoreManager.products');
  return product;
};

const getId = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id=?',
    [id]);
  
  return product;
};

// requisito 3
const NewProducts = async (name) => {
  const [result] = await connection
  .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return { id: result.insertId, name };
};

// requisito 12
const DeletProductor = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
};

// requisito 12
// este modelo de estrutura foi retirado da aula 23.3 da tuma 19 B
// const Delet = async (req, res) => {
//   const id = Number(req.params.id);
//   const sql = 'DELETE FROM products WHERE id = ?;';
//   const result = await connection.execute(sql, [id]);
//   const status = result[0];
//   const { affectedRows } = status;
//   if (affectedRows < 0) return res.status(204); 
//   res.status(404).json({ message: 'Product not found' });
// };
//
// const validProduct = async (prosuctsData) => {
  //   const [result] = await connection.execute('')

  // }

  // const seializer = (prosuctsData) => ({
//     id: prosuctsData.id,
//     name: prosuctsData.name,
//   });

// requisito 4
// const updateProducto = async () => {
//   const [result] = await connection.execute('UPDATE StoreManager.products SET name = ? WHERE id = ?');
// };
module.exports = { getAll, getId, NewProducts, DeletProductor };
