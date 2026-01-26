const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
// Adjust path to point to the root .env file if we want to share it, or use a local one.
// The user asked to add connection setup in the .env file (presumably the root one).
// So we need to point dotenv to the root .env
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

const Test = require('./models/Test');

// Connect to database
connectDB().then(async () => {
  try {
    const count = await Test.countDocuments();
    if (count === 0) {
      await Test.create({ message: 'Database initialized successfully' });
      console.log('Initial data created to force database creation.');
    }
  } catch (err) {
    console.error('Error creating initial data:', err);
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes (Placeholder)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Database Status Endpoint
app.get('/api/status', (req, res) => {
  const mongoose = require('mongoose');
  const dbStatus = mongoose.connection.readyState;

  const statusMap = {
    0: 'Disconnected',
    1: 'Connected',
    2: 'Connecting',
    3: 'Disconnecting',
  };

  res.json({
    status: statusMap[dbStatus] || 'Unknown',
    readyState: dbStatus,
    host: mongoose.connection.host,
    name: mongoose.connection.name
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
