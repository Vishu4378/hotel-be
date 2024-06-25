const express = require('express');
const { Person } = require('../models/person');
const router = express.Router();

// adding person details
router.post('/person', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const saved = await newPerson.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// get person details
router.get('/people', async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// get person details by email
router.get('/person/:email', async (req, res) => {
  const email = req.params.email;
  try {
    const response = await Person.find({
      email: email,
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//update person detail
router.patch('/person/:email', async (req, res) => {
  const email = req.params.email;
  const data = req.body;

  try {
    const newPerson = await Person.findOneAndUpdate({ email }, data, {
      new: true, //return updated document
      runValidators: true,
    });
    if (!newPerson) {
      return res.status(404).json({ message: 'not found' }); //return 'error', 'not found');
    }
    res.status(200).json(newPerson);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
//delete person detail
router.delete('/person/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const newPerson = await Person.findOneAndDelete({ email });
    if (!newPerson) {
      return res.status(404).json({ message: 'not found' }); //return 'error', 'not found');
    }
    res.status(200).json(newPerson);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
