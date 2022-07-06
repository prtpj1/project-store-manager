const salesServices = require('../services/salesServices');

const getAll = async (req, res) => {
  try {
    const data = await salesServices.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.log('🚀 ~ getAll Sales error', error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const dataId = await salesServices.getById(id);

    if (!dataId || dataId.length < 1) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json(dataId);
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};

module.exports = {
  getAll,
  getById,
};