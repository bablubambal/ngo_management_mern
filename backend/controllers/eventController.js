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
