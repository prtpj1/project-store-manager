const productsM = require('../models/productsM');

const getAll = async () => {
  const data = await productsM.getAll();
  return data;
};

const getById = async (id) => {
  const [dataId] = await productsM.getById(id);
  return dataId;
};

module.exports = {
  getAll,
  getById,
};