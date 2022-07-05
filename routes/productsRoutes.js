const express = require('express');

const router = express.Router();
const productsC = require('../controllers/productsC');
const productValidation = require('../helpers/productValidation');

router.get('/', productsC.getAll);
router.get('/:id', productsC.getById);
// router.get('/', (req, res, next) => { next('No route found'); });

router.post('/', productValidation, productsC.postProduct);

module.exports = router;