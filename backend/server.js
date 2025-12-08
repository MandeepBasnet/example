const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = require('./config/db');
connectDB();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Fundora API is running');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
