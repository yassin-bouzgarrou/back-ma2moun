const Product = require('../models/Product');

const createProduct = async (req, res) => {
  const product = await Product.create({ ...req.body, user: req.user._id });
  res.status(201).json(product);
};

const likeProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product.likes.includes(req.user._id)) {
    product.likes.push(req.user._id);
    await product.save();
  }
  res.json(product);
};

module.exports = { createProduct, likeProduct };
