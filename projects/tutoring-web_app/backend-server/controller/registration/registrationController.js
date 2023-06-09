// registrationController.js
const bcrypt = require('bcrypt');
const db = require('../../db');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUserQuery = 'SELECT * FROM users WHERE email = ?';
    const existingUser = await db.query(existingUserQuery, [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert a new user into the database
    const insertUserQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    await db.query(insertUserQuery, [username, email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
