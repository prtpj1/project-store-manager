const connection = require('./connections');

const getAll = async () => {
  const query = 'SELECT * FROM products;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',
    [id],
  );
  return rows;
};

module.exports = {
  getAll,
  getById,
};