const express = require('express');
const { registerVolunteer } = require('../controllers/eventController');

const router = express.Router();

router.post('/register-volunteer', registerVolunteer);

module.exports = router;
