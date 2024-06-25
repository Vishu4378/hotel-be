const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoUrl = process.env.MONGO_URI;
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'hotel',
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.on('connected', () => {
  console.log('connected');
});

db.on('disconnected', () => {
  console.log('disconnected');
});

module.exports = {
  db,
};
