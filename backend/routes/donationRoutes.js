const express = require('express');
const { createDonation, getDonors } = require('../controllers/donationController');

const router = express.Router();

router.post('/create', createDonation);
router.get('/donors', getDonors);

module.exports = router;
