// routes/volunteerRequirementRoutes.js
const express = require('express');
const { createRequirement, getRequirements, getUserRequirements } = require('../controllers/volunteerRequirementController');


const router = express.Router();

router.post('/',  createRequirement);
router.get('/', getRequirements);
router.get('/my-requirements', getUserRequirements);

module.exports = router;
