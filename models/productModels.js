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
  // const { name } = req.body;

  const [result] = await connection
  .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  // const [result] = await connection
  // .execute('SELECT id, name FROM StoreManager.products ORDER BY id DESC LIMIT 1');
  return { id: result.insertId, name };
};

// requisito 4
// const validProduct = async (prosuctsData) => {
//   const [result] = await connection.execute('')

// }

// const seializer = (prosuctsData) => ({
//     id: prosuctsData.id,
//     name: prosuctsData.name,
//   });

module.exports = { getAll, getId, NewProducts };