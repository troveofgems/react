const
  mongoose = require('mongoose'),
  //config = require('config'),
  db = process.env.MONGO_URI;//config.get('mongoURI');

const connectToDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Unable to connect to MongoDB', err);
  }
};

module.exports = connectToDB;