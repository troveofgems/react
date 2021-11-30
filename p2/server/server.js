require('./config/_env.js');
const
  path = require('path'),
  PORT = process.env.PORT || 5000,
  express = require('express'),
  Application = express(),
  connectToDB = require('./db/connection.db');

connectToDB();

Application.use(express.json());

if (process.env.NODE_ENV === 'development') {
  Application.get('/', (req, res, next) => {
    return res.status(200).json({ success: true, message: 'Sanity Check - Server-side API' });
  });
}

// Mount Routes
Application.use('/api/auth', require('./routes/auth.route'));
Application.use('/api/contacts', require('./routes/contact.route'));
Application.use('/api/users', require('./routes/user.route'));

// Production Config
if (process.env.NODE_ENV === 'production') {
  Application.use(express.static('client/build'));

  Application.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

Application.listen(PORT, () => console.log(`Listening On Port ${PORT}`));