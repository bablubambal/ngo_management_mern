const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO' },
});

module.exports = mongoose.model('Donation', DonationSchema);
