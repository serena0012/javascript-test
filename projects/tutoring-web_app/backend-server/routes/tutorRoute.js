// tutorRoute.js

const express = require('express');
const createTutor = require('../controller/tutor/createTutor');
const getTutor = require('../controller/tutor/getTutor');
const updateTutor = require('../controller/tutor/updateTutor');
const deleteTutor = require('../controller/tutor/deleteTutor');

const router = express.Router();

router.post('/tutor', createTutor);
router.get('/tutor', getTutor);
router.put('/tutor/:id', updateTutor);
router.delete('/tutor/:id', deleteTutor);

module.exports = router;
