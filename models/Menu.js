const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Menu = new mongoose.model('Menu', menuSchema);

module.exports = {
  Menu,
};
