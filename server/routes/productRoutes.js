const express = require('express');
const multer = require('multer');
const { getAll,addProduct, getProducts, getProduct, updateProduct, deleteProduct, updatePromotion, updateRating, listProducts } = require('../controllers/productController');
// const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
const productController = require('../controllers/productController'); // Adjust the path if needed

const upload = multer({ dest: 'uploads/' });

// router.post('/', authMiddleware, upload.single('image'), addProduct);
// router.get('/', listProducts); // Route pour afficher tous les produits

router.get('/getAll', async (req, res) => {
  console.log('Received request to /getAll');
  try {
    const results = await productController.getAll();
    console.log('Sending response:', results);
    res.status(200).json(results);
  } catch (error) {
    console.error('Response Error:', error);
    res.status(500).json({ error: error.message });
  }
});
router.get('/:id', getProduct);
// router.put('/:id', authMiddleware, updateProduct);
// router.put('/promotion/:id', authMiddleware, updatePromotion); // Nouvelle route pour mettre à jour la promotion
// router.put('/rating/:id', authMiddleware, updateRating); // Nouvelle route pour mettre à jour la notation
// router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;
