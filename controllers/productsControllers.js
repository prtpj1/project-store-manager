// const Joi = require('joi');
const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  try {
    const data = await productsServices.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.log('🚀 ~ getAll Product error', error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const dataId = await productsServices.getById(id);

    if (!dataId || dataId.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(dataId);
  } catch (error) {
    console.log('🚀 ~ getById Product error', error);
  }
};

const postProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productsServices.postProduct(name);

    res.status(201).json(newProduct);
  } catch (error) {
    console.log('🚀 ~ postProduct error', error);
  }
};

const putProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const updProduct = await productsServices.putProduct(id, name);

    if (!updProduct.id) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updProduct);
  } catch (error) {
    console.log('🚀 ~ putProduct error', error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await productsServices.deleteProduct(id);
    console.log('🚀 ~ productId', productId.id);

    if (!productId.id || productId.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(204).end();
  } catch (error) {
    console.log('🚀 ~ error', error);
  }
};

module.exports = {
  getAll,
  getById,
  postProduct,
  putProduct,
  deleteProduct,
};