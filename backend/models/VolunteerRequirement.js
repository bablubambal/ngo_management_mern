// models/VolunteerRequirement.js
const mongoose = require('mongoose');

const VolunteerRequirementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('VolunteerRequirement', VolunteerRequirementSchema);
