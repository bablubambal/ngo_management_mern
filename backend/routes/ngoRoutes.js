const express = require('express');
const { createNGO, createEvent, getEvents, getNGO } = require('../controllers/ngoController');
const { getCollaboratedEvents } = require('../controllers/eventController');

const router = express.Router();

router.post('/create', createNGO);
router.post('/events', createEvent);
router.get('/events', getEvents);
router.get('/getngos',getNGO)
router.get('/collaborated', getCollaboratedEvents);

module.exports = router;
