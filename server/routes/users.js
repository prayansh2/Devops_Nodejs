// server/routes/users.js

const express = require('express');
const router = express.Router();
const userData = require('../data/users');

// GET /api/users
router.get('/', (req, res) => {
  res.json(userData.getUsers());
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const user = userData.getUserById(Number(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /api/users
router.post('/', (req, res) => {
  const newUser = userData.addUser(req.body);
  res.status(201).json(newUser);
});

module.exports = router;
