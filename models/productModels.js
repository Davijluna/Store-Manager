const connection = require('./connection');

// const getNewProducts = ({ id, name }) => {
//   const fullName = [id, name].filter((productor) => productor).join(" ");
//   return {
//     id,
//     name,
//     fullName,
//   };
// }

// const seializer = (prosuctsData) => {
//   return {
//     id: prosuctsData.id,
//     name: prosuctsData.name,
//   }

// }

const getAll = async () => {
  const [product] = await connection.execute('SELECT * FROM StoreManager.products');
  return product;
};

const getId = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id=?',
    [id]);
  // if (product.length === 0) {
  //   return null;
  // }
  return product;
  // const { name } = product.map(seializer)[0];
  // return getNewProducts({
  //   id,
  //   name,
  // });
};

module.exports = { getAll, getId };