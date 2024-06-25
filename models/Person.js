const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ['chef', 'waiter'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  created: { type: Date, default: Date.now },
});

const Person = mongoose.model('Person', personSchema);

module.exports = {
  Person,
};
