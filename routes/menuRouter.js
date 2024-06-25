const express = require('express');
const { Menu } = require('../models/Menu');
const router = express.Router();

//adding menu
router.post('/addMenu', async (req, res) => {
  try {
    const newFood = new Menu(req.body);
    const saved = await newFood.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//get menu
router.get('/menu', async (req, res) => {
  try {
    const response = await Menu.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
