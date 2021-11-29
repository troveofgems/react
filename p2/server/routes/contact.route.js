const
  express = require('express'),
  router = express.Router(),
  {
    getAllContacts, getContactById, createNewContact, updateContactById, deleteContactById
  } = require('../controllers/contacts.controller'),
  { jwtProtectedRoute } = require('../middleware/auth.middleware');

router
  .route('/')
  .all(jwtProtectedRoute)
    .get(getAllContacts)
    .post(createNewContact);

router
  .route('/:id')
  .all(jwtProtectedRoute)
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);

module.exports = router;