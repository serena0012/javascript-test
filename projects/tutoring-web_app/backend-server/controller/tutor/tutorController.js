const Tutor = require('../models/Tutor'); // Assuming you have a Tutor model

// Get all tutors
const getAllTutors = (req, res) => {
  // Implementation to fetch all tutors from the database
  Tutor.find()
    .then((tutors) => res.json(tutors))
    .catch((error) => res.status(500).json({ error: error.message }));
};

// Get tutor by ID
const getTutorById = (req, res) => {
  const { id } = req.params;
  // Implementation to fetch a tutor by ID from the database
  Tutor.findById(id)
    .then((tutor) => {
      if (tutor) {
        res.json(tutor);
      } else {
        res.status(404).json({ error: 'Tutor not found' });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

// Create a new tutor
const createTutor = (req, res) => {
  const { name, subject, experience } = req.body;
  // Implementation to create a new tutor in the database
  const tutor = new Tutor({ name, subject, experience });
  tutor
    .save()
    .then((createdTutor) => res.status(201).json(createdTutor))
    .catch((error) => res.status(500).json({ error: error.message }));
};

// Update a tutor
const updateTutor = (req, res) => {
  const { id } = req.params;
  const { name, subject, experience } = req.body;
  // Implementation to update a tutor in the database
  Tutor.findByIdAndUpdate(id, { name, subject, experience }, { new: true })
    .then((updatedTutor) => {
      if (updatedTutor) {
        res.json(updatedTutor);
      } else {
        res.status(404).json({ error: 'Tutor not found' });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

// Delete a tutor
const deleteTutor = (req, res) => {
  const { id } = req.params;
  // Implementation to delete a tutor from the database
  Tutor.findByIdAndDelete(id)
    .then((deletedTutor) => {
      if (deletedTutor) {
        res.json({ message: 'Tutor deleted successfully' });
      } else {
        res.status(404).json({ error: 'Tutor not found' });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor,
};
