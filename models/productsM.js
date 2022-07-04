const connection = require('./connections');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManeger.products;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    'SELECT * FROM StoreManeger.products WHERE id = ?;',
    [id],
  );
  return rows;
};

const postProduct = async (name) => {
  const [row] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );

  const newProduct = {
    id: row.insertId,
    name,
  };
  return newProduct;
};

module.exports = {
  getAll,
  getById,
  postProduct,
};