const
  PORT = process.env.PORT || 5000,
  express = require('express'),
  Application = express(),
  connectToDB = require('./db/connection.db');

connectToDB();

Application.use(express.json());

Application.get('/', (req, res, next) => {
  return res.status(200).json({ success: true, message: 'Sanity Check - Server-side API' });
});

// Mount Routes
Application.use('/api/auth', require('./routes/auth.route'));
Application.use('/api/contacts', require('./routes/contact.route'));
Application.use('/api/users', require('./routes/user.route'));

Application.listen(PORT, () => console.log(`Listening On Port ${PORT}`));