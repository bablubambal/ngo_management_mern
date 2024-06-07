// controllers/volunteerRequirementController.js
const VolunteerRequirement = require('../models/VolunteerRequirement');

exports.createRequirement = async (req, res) => {
  const { title, description, date,userId } = req.body;
//   const userId = req.user.id;
  try {
    const requirement = new VolunteerRequirement({ title, description, date, createdBy: userId });
    await requirement.save();
    res.status(201).json(requirement);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getRequirements = async (req, res) => {
  try {
    const requirements = await VolunteerRequirement.find().populate('createdBy', 'name');
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserRequirements = async (req, res) => {
  const userId = req.user.id;
  try {
    const requirements = await VolunteerRequirement.find({ createdBy: userId });
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
