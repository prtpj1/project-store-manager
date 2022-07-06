const connection = require('./connections');

const getAll = async () => {
  const query = `SELECT
    sales_products.sale_id AS saleId,
    date,
    sales_products.product_id AS productId,
    sales_products.quantity
  FROM
    StoreManager.sales_products
  INNER JOIN
    StoreManager.sales
  ON
    sales_products.sale_id = StoreManager.sales.id`;
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    `SELECT
      date,
      sales_products.product_id AS productId,
      sales_products.quantity
    FROM
      StoreManager.sales_products
    INNER JOIN
      StoreManager.sales
    ON
      sales_products.sale_id = StoreManager.sales.id
    WHERE
      sales_products.sale_id = ?;`,
    [id],
  );
  // console.log('🚀 ~ rows', rows);
  return rows;
};

module.exports = {
  getAll,
  getById,
};
