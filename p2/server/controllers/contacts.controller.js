const
  User = require('../db/models/User'),
  Contact = require('../db/models/Contact');

const _buildDocForContact = (data, insert = false, userId = null) => {
  let
    doc = {},
    { firstName, lastName, company, telephone, email, birthday, notes, url, contactType } = data,
    fields = {
      "firstName": firstName, "lastName": lastName,
      "company": company, "telephone": telephone, "email": email, "birthday": birthday,
      "notes": notes, "url": url, "contactType": contactType
    };

  if (insert) { doc.user = userId }
  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      doc[`${key}`] = value;
    }
  }

  return doc;
};

// @route   GET api/contacts
// @desc    Return All User's Contacts
// @access  Private
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    return res.status(200).json({
      success: true,
      error: null,
      results: contacts,
      bac: 200
    });
  } catch(err) { // Need To Expand On Error Code Here
    return res.status(err.statusCode || 500).json({
      success: false,
      error: err,
      results: {},
      bac: 500
    });
  }
};

// @route   GET api/contacts
// @desc    Return Specific User Contact
// @access  Private
const getContactById = (req, res, next) => {
  return res.json({'task': 'read one'});
};

// @route   POST api/contacts
// @desc    Add New Contact
// @access  Private
const createNewContact = async (req, res, next) => {
  try {
    let
      document = _buildDocForContact(req.body, true, req.user.id);
    console.log(document);
    const newContact = new Contact(document);

    let contact = await newContact.save();
    return res.status(201).json({
      success: true,
      results: contact
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      error: err,
      results: {}
    });
  }
};

// @route   PUT api/contacts/:id
// @desc    Update Specific User Contact
// @access  Private
const updateContactById = async (req, res, next) => {
  const
    updates = _buildDocForContact(req.body),
    { id: contactId } = req.params;
  try {
    let contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: {
          message: "Unable to update contact by id. Request Aborted."
        }
      })
    }
    let ownershipCheckFails = contact.user.toString() !== req.user.id;
    if (ownershipCheckFails) {
      return res.status(401).json({
        success: false,
        error: {
          message: "Not Authorized. Request Aborted."
        }
      })
    }

    contact = await Contact.findByIdAndUpdate(contactId, { $set: updates }, { new: true });
    res.status(200).json({ success: true, results: contact });
  } catch(err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      error: err,
      results: {}
    });
  }
};

// @route   DELETE api/contacts
// @desc    Delete Specific User Contact
// @access  Private
const deleteContactById = async (req, res, next) => {
  const { id: contactId } = req.params;
  try {
    let contact = await Contact.findById(contactId);
    if (contact.user._id.toString() === req.user.id) {
      await Contact.findByIdAndRemove({_id: contactId});
      return res.status(200).json({
        success: true,
        error: null,
        results: {},
        bac: 200
      });
    }
  } catch(err) { // Need To Expand On Error Code Here
    return res.status(err.statusCode || 500).json({
      success: false,
      error: err,
      results: {},
      bac: 500
    });
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createNewContact,
  updateContactById,
  deleteContactById
};