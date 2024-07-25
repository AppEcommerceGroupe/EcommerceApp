const jwt = require('jsonwebtoken');
const { User } = require('../models/user.js');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authMiddleware;



// const jwt = require('jsonwebtoken');
// const { User } = require('../models');
// const Token = require('./verify')
// const verifyToken = async (req, res, next) => {
//    const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findByPk(decoded.id);
//     if (!req.user) return res.status(401).json({ message: 'Invalid token.' });
//     next();
//   } catch (ex) {
//     res.status(400).json({ message: 'Invalid token.' });
//   }
// };

// module.exports = verifyToken;
