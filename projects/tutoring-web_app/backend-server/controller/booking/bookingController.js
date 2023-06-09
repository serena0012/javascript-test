#!/usr/bin/node
const db = require('../../db');

// GET /api/bookings
const getAllBookings = (req, res) => {
  const query = 'SELECT * FROM bookings';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bookings: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

// GET /api/bookings/:id
const getBookingById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM bookings WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching booking: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Booking not found' });
    } else {
      res.json(results[0]);
    }
  });
};

// POST /api/bookings
const createBooking = (req, res) => {
  const { studentId, tutorId, subjectId, date } = req.body;
  const query = 'INSERT INTO bookings (student_id, tutor_id, subject_id, date) VALUES (?, ?, ?, ?)';
  db.query(query, [studentId, tutorId, subjectId, date], (err, results) => {
    if (err) {
      console.error('Error creating booking: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const createdBooking = {
        id: results.insertId,
        studentId,
        tutorId,
        subjectId,
        date,
      };
      res.status(201).json(createdBooking);
    }
  });
};

// PUT /api/bookings/:id
const updateBooking = (req, res) => {
  const { id } = req.params;
  const { studentId, tutorId, subjectId, date } = req.body;
  const query = 'UPDATE bookings SET student_id = ?, tutor_id = ?, subject_id = ?, date = ? WHERE id = ?';
  db.query(query, [studentId, tutorId, subjectId, date, id], (err) => {
    if (err) {
      console.error('Error updating booking: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.sendStatus(200);
    }
  });
};

// DELETE /api/bookings/:id
const deleteBooking = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM bookings WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error deleting booking: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};

