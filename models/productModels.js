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

// requisito 3 e 4
const NewProducts = async (name) => {
  const [result] = await connection
  .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return { id: result.insertId, name };
};

// requisito 6
const ValidCadastryProducts = async (idSales, { idProductor, quantidade }) => {
  await connection
  .execute('INSERT INTO StoreManager.sales(id_sales, id_productor, quantidade) VALUES (?) (?) (?)',
      [idSales, idProductor, quantidade]);
};

// requisito 10
const UpdataProductos = async (name, id) => {
  await connection
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ? ', [name, id]);
  return 'davi';
};

// requisito 12
const DeletProductor = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
};
module.exports = {
  getAll,
  getId,
  NewProducts,
  DeletProductor,
  ValidCadastryProducts,
  UpdataProductos,
};
