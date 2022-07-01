const productsServices = require('../services/productsServices');

const getAll = async (req, res, next) => {
  try {
    const data = await productsServices.getAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dataId = await productsServices.getById(id);

    if (!dataId || dataId.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(dataId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};