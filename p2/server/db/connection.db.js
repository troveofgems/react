const
  mongoose = require('mongoose'),
  db = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Unable to connect to MongoDB', err);
  }
};

module.exports = connectToDB;