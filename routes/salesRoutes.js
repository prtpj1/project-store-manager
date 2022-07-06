const express = require('express');

const router = express.Router();

const salesControllers = require('../controllers/salesControllers');

router.get('/', salesControllers.getAll);
router.get('/:id', salesControllers.getById);

module.exports = router;