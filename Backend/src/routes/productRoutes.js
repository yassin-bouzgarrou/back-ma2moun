
const express = require('express');
const { createProduct, likeProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/', createProduct);
router.put('/:id/like', likeProduct);

module.exports = router;
