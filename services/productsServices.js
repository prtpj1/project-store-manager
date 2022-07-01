const productsModels = require('../models/productsModels');

const getAll = async () => {
  const data = await productsModels.getAll();
  return data;
};

const getById = async (id) => {
  const [dataId] = await productsModels.getById(id);
  console.log('🚀 ~ dataId', dataId);
  if (!dataId) {
    return [];
  }
  return dataId;
};

module.exports = {
  getAll,
  getById,
};