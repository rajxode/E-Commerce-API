
const express = require('express');

const router = express.Router();

const productController = require('../controllers/productsController');

router.get('/', productController.products);

module.exports = router;