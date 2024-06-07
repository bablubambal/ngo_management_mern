const express = require('express');
const { registerVolunteer } = require('../controllers/eventController');

const { createEvent, getEvents, getCollaboratedEvents } = require('../controllers/eventController');



const router = express.Router();

router.post('/register-volunteer', registerVolunteer);

// routes/eventRoutes.js
// router.post('/create',  createEvent);
// router.get('/', getEvents);
router.get('/collaborated', getCollaboratedEvents);


module.exports = router;


