// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/ngo_management', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ngo_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const userRoutes = require('./routes/userRoutes');
const ngoRoutes = require('./routes/ngoRoutes');
const eventRoutes = require('./routes/eventRoutes');
const donationRoutes = require('./routes/donationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/ngos', ngoRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/donations', donationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
