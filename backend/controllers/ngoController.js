const NGO = require('../models/NGO');
const Event = require('../models/Event');

exports.createNGO = async (req, res) => {
  const { name, description } = req.body;
  try {
    const ngo = new NGO({ name, description });
    await ngo.save();
    res.status(201).json(ngo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getNGO = async (req, res) => {
  console.log('get NGOSS')
  // const { name, description } = req.body;
  try {
    // const ngo = new NGO({ name, description });
    // await ngo.save();
    const ngos = await NGO.find()
    res.status(200).json(ngos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createEvent = async (req, res) => {
  const { title, description,image, date, ngoId } = req.body;

  try {
    const ngo = await NGO.findById(ngoId);
    if (!ngo) return res.status(404).json({ msg: 'NGO not found' });

    const event = new Event({ title, description, date,image,location, ngo: ngoId });
    await event.save();

    ngo.events.push(event);
    await ngo.save();

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('ngo');
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
