const express = require('express');
const user = require('../controllers/user.js')
const authController = require('../controllers/authcontroller.js');

const multer = require('multer');
const { getAll,addProduct, getProducts, getProduct, updateProduct, deleteProduct, updatePromotion, updateRating, listProducts } = require('../controllers/productController');

const router = express.Router();
const productController = require('../controllers/productController'); // Adjust the path if needed


 router.post('/login', authController.login);



// User routes
router.post('/users', authController.register);
router.get('/users/getAll', user.getAllUser)
router.get('/users/:id', user.getUser);
router.put('/users/:id', user.updateUser);
router.delete('/users/:id', user.deleteUser);

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


