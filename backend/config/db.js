const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// MongoDB Connection Events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
  console.log(`Active Database: ${mongoose.connection.name}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = connectDB;
