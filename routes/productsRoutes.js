const express = require('express');

const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/:id', productsControllers.getById);

router.get('/', productsControllers.getAll);

// router.get('/', (req, res, next) => { next('No route found'); });

module.exports = router;