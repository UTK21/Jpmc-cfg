require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Initialise app
const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/requests', require('./routes/api/requests'));
app.use('/api/startups', require('./routes/api/startups'));
app.use('/api/admin', require('./routes/api/admin'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
