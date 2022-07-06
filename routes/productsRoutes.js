const express = require('express');

const router = express.Router();
const productsControllers = require('../controllers/productsControllers');
const productValidation = require('../helpers/productValidation');

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getById);
// router.get('/', (req, res, next) => { next('No route found'); });

router.post('/', productValidation, productsControllers.postProduct);

router.put('/:id', productValidation, productsControllers.putProduct);

router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;