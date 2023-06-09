#!/usr/bin/node
const express = require('express');
const app = express();
const port = 3000;
const Tutor = require('./controller/models/Tutor');

// Middleware
app.use(express.json());

// Import controllers
const userController = require('./controller/user/userController');
const tutorController = require('./controller/tutor/tutorController');
const bookingController = require('./controller/booking/bookingController');
const subjectController = require('./controller/subject/subjectController');
const registrationController = require('./controller/registration/registrationController');

// User routes
app.get('/api/user', userController.getAllUsers);
app.get('/api/user/:id', userController.getUserById);
app.post('/api/user', userController.createUser);
app.put('/api/user/:id', userController.updateUser);
app.delete('/api/user/:id', userController.deleteUser);

// Tutor routes
app.get('/api/tutor', tutorController.getAllTutors);
app.get('/api/tutor/:id', tutorController.getTutorById);
app.post('/api/tutor', tutorController.createTutor);
app.put('/api/tutor/:id', tutorController.updateTutor);
app.delete('/api/tutor/:id', tutorController.deleteTutor);

// Booking routes
app.get('/api/booking', bookingController.getAllBookings);
app.get('/api/booking/:id', bookingController.getBookingById);
app.post('/api/booking', bookingController.createBooking);
app.put('/api/booking/:id', bookingController.updateBooking);
app.delete('/api/booking/:id', bookingController.deleteBooking);

// Subject routes
app.get('/api/subject', subjectController.getAllSubjects);
app.get('/api/subject/:id', subjectController.getSubjectById);
app.post('/api/subjects', subjectController.createSubject);
app.put('/api/subjects/:id', subjectController.updateSubject);
app.delete('/api/subjects/:id', subjectController.deleteSubject);

// Registration route
app.post('/api/register', registrationController.registerUser);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

