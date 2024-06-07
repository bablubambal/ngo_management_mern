const Donation = require('../models/Donation');
const User = require('../models/User');
const NGO = require('../models/NGO');

exports.createDonation = async (req, res) => {
  const { amount, userId, ngoId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const ngo = await NGO.findById(ngoId);
    if (!ngo) return res.status(404).json({ msg: 'NGO not found' });

    const donation = new Donation({ amount, donor: userId, ngo: ngoId });
    await donation.save();

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getDonation  = async (req, res) => {
  try {
    const requirements = await Donation.find().populate('createdBy', 'name');
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
exports.getDonors = async (req, res) => {
  try {
    const donors = await Donation.find().populate('donor ngo');
    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};