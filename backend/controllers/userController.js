const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new User({ name, email, password, role });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    const payload = { userId: newUser.id, role: newUser.role };
    const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token,payload });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};



exports.getAllUsers = async (req, res) => {
 
  
  try {
   
    const users = await User.find()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

