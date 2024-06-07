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
