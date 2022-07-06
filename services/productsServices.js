const productsModels = require('../models/productsModels');

const getAll = async () => {
  const data = await productsModels.getAll();
  return data;
};

const getById = async (id) => {
  const [dataId] = await productsModels.getById(id);
  return dataId;
};

const postProduct = async (name) => {
  const newProduct = await productsModels.postProduct(name);
  return newProduct;
};

const putProduct = async (id, name) => {
  const getProductId = await productsModels.getById(id);
  if (getProductId.length < 1) {
    return { error: { } };
  }
  const updProduct = await productsModels.putProduct(id, name);
  return updProduct;
};

const deleteProduct = async (id) => {
  const getProductId = await productsModels.getById(id);
  if (getProductId.length < 1) {
    return { error: { } };
  }
  const productId = await productsModels.deletProduct(id);
  return productId;
};

module.exports = {
  getAll,
  getById,
  postProduct,
  putProduct,
  deleteProduct,
};