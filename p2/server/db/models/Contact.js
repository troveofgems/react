const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  company: {
    type: String
  },
  telephone: {
    type: String
  },
  email: {
    type: String
  },
  birthday: {
    type: Date
  },
  notes: {
    type: String
  },
  url: {
    type: String
  },
  contactType: {
    type: String,
    enum: ['personal', 'professional'],
    default: 'personal',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('contact', ContactSchema);