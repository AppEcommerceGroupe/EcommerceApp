const { User } = require('../models');
const bcrypt = require('bcryptjs'); 

exports.createUser = async (req, res) => {
  const { username, email, password,  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    
    });
    console.log(user,'newuser')

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
exports.getAllUser = async (req, res) => {
    try {
      const user = await User.findAll({});
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateUser = async (req, res) => {
  const { username, email,  } = req.body;

  try {
    let user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user = await User.update(
      { username, email },
      { where: { id: req.params.id } }
    );
    res.json({ message: 'User updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};