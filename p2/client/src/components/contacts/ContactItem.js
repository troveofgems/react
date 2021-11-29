import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/Contact.context';

const ContactItem = ({ contact }) => {
  const
    contactContext = useContext(ContactContext),
    { id, name, email, phone, contactType = 'personal' } = contact,
    { deleteContact, setCurrentContact, clearCurrentContact } = contactContext;

  const processDeleteRequest = () => {
    let
      confirmationCode = `${id.split('-', 1)}`,
      confirmationPrompt = prompt(
      'You must confirm that you would like to delete this contact. Please type, or, copy & paste the ' +
        'following id into the field and select enter to continue with removal\n' + `${confirmationCode}`
      );
    if (confirmationPrompt === confirmationCode) {
      clearCurrentContact(); // If Any Exists
      return deleteContact(id);
    }

    return alert('Contact was not deleted.');
  }

  const onDelete = () => processDeleteRequest();

  return (
    <div className={'card bg-light'} key={id}>
      <h3 className={"text-primary text-left"}>
        {name}{' '}
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
            <i className={"fas fa-envelope-open"} />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className={"fas fa-phone"} />
            {phone}
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