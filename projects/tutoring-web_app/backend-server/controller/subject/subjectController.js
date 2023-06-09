#!/usr/bin/node
const db = require('../../db');

// GET /api/subjects
const getAllSubjects = (req, res) => {
  const query = 'SELECT * FROM subjects';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching subjects: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

// GET /api/subjects/:id
const getSubjectById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM subjects WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching subject: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Subject not found' });
    } else {
      res.json(results[0]);
    }
  });
};

// POST /api/subjects
const createSubject = (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO subjects (name) VALUES (?)';
  db.query(query, [name], (err, results) => {
    if (err) {
      console.error('Error creating subject: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const createdSubject = {
        id: results.insertId,
        name,
      };
      res.status(201).json(createdSubject);
    }
  });
};

// PUT /api/subjects/:id
const updateSubject = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const query = 'UPDATE subjects SET name = ? WHERE id = ?';
  db.query(query, [name, id], (err) => {
    if (err) {
      console.error('Error updating subject: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.sendStatus(200);
    }
  });
};

// DELETE /api/subjects/:id
const deleteSubject = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM subjects WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error deleting subject: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
};
