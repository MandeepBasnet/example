const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET || 'refreshsecret', { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  console.log('Register request body:', req.body);
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    console.log('Checked existing user');
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      name,
      email,
      password,
      role
    });

    console.log('Saving user...');
    await user.save();
    console.log('User saved:', user._id);

    console.log('Generating tokens...');
    const token = generateToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);
    console.log('Tokens generated');

    user.refreshToken.push(refreshToken);
    console.log('Pushing refresh token...');
    await user.save();
    console.log('Final save complete');

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
      refreshToken
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.login = async (req, res) => {
  console.log('Login request body:', req.body);
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Password mismatch for:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);

    // Keep only last 5 refresh tokens to prevent unlimited sessions
    let oldTokens = user.refreshToken || [];
    if (oldTokens.length > 5) oldTokens = oldTokens.slice(-4);
    
    user.refreshToken = [...oldTokens, refreshToken];
    await user.save();

    res.json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
      refreshToken
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh Token Required' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET || 'refreshsecret');
    const user = await User.findOne({ _id: decoded.userId, refreshToken: refreshToken });

    if (!user) {
      return res.status(403).json({ message: 'Invalid Refresh Token' });
    }

    const newToken = generateToken(user._id, user.role);
    res.json({ token: newToken });

  } catch (error) {
    console.error('Refresh Token Error:', error);
    res.status(403).json({ message: 'Invalid Refresh Token' });
  }
};

exports.logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (req.user && refreshToken) {
       await User.findOneAndUpdate(
         { _id: req.user.userId }, 
         { $pull: { refreshToken: refreshToken } }
       );
    }
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
