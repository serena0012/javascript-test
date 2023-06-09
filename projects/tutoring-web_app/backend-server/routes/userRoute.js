// userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// User registration route
router.post('/register', userController.registerUser);

module.exports = router;
