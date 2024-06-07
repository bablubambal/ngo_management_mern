const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {type:String, required: true},
  category: { type:String },
  location:  {type:String ,},
  date: { type: Date, required: true },
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO' },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Event', EventSchema);
