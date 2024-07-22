const { Product } = require('../models');
const conn = require('../models/index');

// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'your_cloud_name',
//   api_key: 'your_api_key',
//   api_secret: 'your_api_secret'
// });

exports.getAll=async (callback) => {
  const sql = 'SELECT * FROM `produit`';
  conn.query(sql, function (error, results) {
      callback(error, results);
  });
},

exports.addProduct = async (req, res) => {
  const { name, description, price, quantity, promotion, rating } = req.body;
  const result = await cloudinary.uploader.upload(req.file.path);
  const newProduct = await Product.create({ name, description, price, imageUrl: result.secure_url, quantity, promotion, rating });
  res.status(201).json({ product: newProduct });
};

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json({ products });
};
exports.getProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json({ product });
};

exports.updateProduct = async (req, res) => {
  const { name, description, price, quantity, promotion, rating } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const updatedProduct = await product.update({ name, description, price, quantity, promotion, rating });
  res.json({ product: updatedProduct });
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  await product.destroy();
  res.status(204).send();
};

// Fonction pour mettre à jour la promotion d'un produit
exports.updatePromotion = async (req, res) => {
  const { promotion } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const updatedProduct = await product.update({ promotion });
  res.json({ product: updatedProduct });
};

// Fonction pour mettre à jour la notation d'un produit
exports.updateRating = async (req, res) => {
  const { rating } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const updatedProduct = await product.update({ rating });
  res.json({ product: updatedProduct });
};

// Fonction pour afficher tous les produits
exports.listProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json({ products });
};
