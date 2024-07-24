const express = require('express');
const productController = require('../controllers/productController.js');
const user = require('../controllers/user.js')
const authController = require('../controllers/authcontroller.js');
const AuthMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();


 router.post('/login', authController.login);
// router.post('/register', authController.register);


// User routes
router.post('/users', user.createUser, authController.register);
router.get('/users/getAll', user.getAllUser)
router.get('/users/:id', user.getUser);
router.put('/users/:id', user.updateUser);
router.delete('/users/:id', user.deleteUser);

module.exports = router;


// const express = require('express');
// const multer = require('multer');
// const { addProduct, getProducts, getProduct, updateProduct, deleteProduct, updatePromotion, updateRating, listProducts } = require('../controllers/productController');
// const authMiddleware = require('../middlewares/authMiddleware');
// const router = express.Router();

// const upload = multer({ dest: 'uploads/' });

// router.post('/', authMiddleware, upload.single('image'), addProduct);
// router.get('/', listProducts); // Route pour afficher tous les produits
// router.get('/:id', getProduct);
// router.put('/:id', authMiddleware, updateProduct);
// router.put('/promotion/:id', authMiddleware, updatePromotion); // Nouvelle route pour mettre à jour la promotion
// router.put('/rating/:id', authMiddleware, updateRating); // Nouvelle route pour mettre à jour la notation
// router.delete('/:id', authMiddleware, deleteProduct);

// module.exports = router;
