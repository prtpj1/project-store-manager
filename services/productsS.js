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

module.exports = {
  getAll,
  getById,
  postProduct,
};