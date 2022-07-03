const express = require('express');

const router = express.Router();
const productsC = require('../controllers/productsC');

router.get('/', productsC.getAll);
router.get('/:id', productsC.getById);
// router.get('/', (req, res, next) => { next('No route found'); });

router.post('/', productsC.postProduct);

module.exports = router;