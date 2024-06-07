const Event = require('../models/Event');
const User = require('../models/User');

exports.registerVolunteer = async (req, res) => {
  const { eventId, userId } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    event.volunteers.push(user);
    await event.save();

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// controllers/eventController.js
// const Event = require('../models/Event');
// const NGO = require('../models/NGO');

// exports.createEvent = async (req, res) => {
//   const { title, description, date, ngoId, collaboratingNGOs } = req.body;
//   try {
//     const ngo = await NGO.findById(ngoId);
//     if (!ngo) return res.status(404).json({ msg: 'NGO not found' });

//     const event = new Event({ title, description, date, ngo: ngoId, collaboratingNGOs });
//     await event.save();

//     ngo.events.push(event);
//     await ngo.save();

//     res.status(201).json(event);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// exports.getEvents = async (req, res) => {
//   try {
//     const events = await Event.find().populate('ngo collaboratingNGOs');
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

exports.getCollaboratedEvents = async (req, res) => {
  try {
    const events = await Event.find({ collaboratingNGOs: { $exists: true, $ne: [] } }).populate('ngo collaboratingNGOs');
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


