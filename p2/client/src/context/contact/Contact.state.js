import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './Contact.context';
import ContactReducer from './Contact.reducer';
import {
  ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT,
  SET_CURRENT, CLEAR_CURRENT,
  FILTER_CONTACTS, CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [{
        id: '1x-c',
        name: "Gary Smith",
        email: "gsmith@gmail.com",
        phone: "222-222-2222",
        contactType: "professional"
      }, {
        id: '2y-b',
        name: "Jane Smatterling",
        email: "jsmatterling@gmail.com",
        phone: "223-222-2222",
        contactType: "personal"
      }, {
      id: '3z-a',
      name: "Brian Brez",
      email: "bbrez@gmail.com",
      phone: "224-222-2222"
    }],
    current: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Create Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current Contact
  const setCurrentContact = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearFilter
      }}
    >
      { props.children }
    </ContactContext.Provider>
  );
}

export default ContactState;