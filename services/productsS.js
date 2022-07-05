const productsM = require('../models/productsM');

const getAll = async () => {
  const data = await productsM.getAll();
  return data;
};

const getById = async (id) => {
  const [dataId] = await productsM.getById(id);
  return dataId;
};

const postProduct = async (name) => {
  const newProduct = await productsM.postProduct(name);
  return newProduct;
};

const putProduct = async (id, name) => {
  const getProductId = await productsM.getById(id);
  if (getProductId.length < 1) {
    return { error: { status: 404, message: 'Product not found with this ID' } };
  }
  const updProduct = await productsM.putProduct(id, name);
  return updProduct;
};

module.exports = {
  getAll,
  getById,
  postProduct,
  putProduct,
};