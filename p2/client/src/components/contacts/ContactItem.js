import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/Contact.context';

const ContactItem = ({ contact }) => {
  const
    contactContext = useContext(ContactContext),
    { _id, firstName, lastName, email, telephone, contactType = 'personal' } = contact,
    { deleteContact, setCurrentContact, clearCurrentContact } = contactContext;

  const processDeleteRequest = () => {
    let
      confirmationCode = `${_id.substring(_id.length - 7)}`,
      confirmationPrompt = prompt(
      'You must confirm that you would like to delete this contact. Please type, or, copy & paste the ' +
        `following id into the field and select enter to continue with removal\n\n\t ${confirmationCode}`
      );
    if (confirmationPrompt === confirmationCode) {
      deleteContact(_id)
      clearCurrentContact(); // If Any Exists
      return null;
    }
    return alert('Contact was not deleted.');
  }

  const onDelete = () => processDeleteRequest();

  return (
    <div className={'card bg-light'} key={_id}>
      <h3 className={"text-primary text-left"}>
        {firstName}{' '}{lastName}
        <span
          style={customStyle_Span}
          className={('badge ' + (contactType === 'professional')) ? 'badge-success' : 'badge-primary' }
        >
          {contactType.charAt(0).toUpperCase() + contactType.slice(1)}
        </span>
      </h3>
      <ul className={"list"}>
        {email && (
          <li>
            <i className={"fas fa-envelope-open"} />{' '}
            {email}
          </li>
        )}
        {telephone && (
          <li>
            <i className={"fas fa-phone"} />{' '}
            {telephone}
          </li>
        )}
      </ul>
      <p>
        <button className={"btn btn-dark btn-sm"} onClick={() => setCurrentContact(contact)}>Edit</button>
        <button className={"btn btn-danger btn-sm"} onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

const customStyle_Span = {
  float: 'right'
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;