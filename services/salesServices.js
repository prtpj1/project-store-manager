const salesModels = require('../models/salesModels');

const getAll = async () => {
  const data = await salesModels.getAll();
  return data;
};

const getById = async (id) => {
  const dataId = await salesModels.getById(id);
  return dataId;
};

module.exports = {
  getAll,
  getById,
};