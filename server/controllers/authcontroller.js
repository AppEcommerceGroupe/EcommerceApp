// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { User } = require('../models');

// exports.register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
//     if (user) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ username, email, password: hashedPassword });

//     const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(201).json({ token });
//   } catch (error) {
//     console.error('Error in register:', error); // Log the full error
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     console.error('Error in login:', error); // Log the full error
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };



const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.register = async (req, res) => {
  const { username, email, password, } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
     
    });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
     
    };

    const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};




// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models');

// exports.register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     let user = await User.findOne({ where: { email } });
//     if (user) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user = await User.create({ username, email, password: hashedPassword });

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(201).json({ token });
//   } catch (error) {
//     console.error('Error in register:', error); // Log the error
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     console.error('Error in login:', error); // Log the error
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
