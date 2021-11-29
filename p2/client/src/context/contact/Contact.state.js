import React, {useReducer} from 'react';
import axios from 'axios';
import ContactContext from './Contact.context';
import ContactReducer from './Contact.reducer';
import {
  ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, CONTACT_ERROR,
  GET_CONTACTS, CLEAR_CONTACTS,
  SET_CURRENT, CLEAR_CURRENT,
  FILTER_CONTACTS, CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    error: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get All Contacts
  const getAllContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      console.log('res is: ', res);
      dispatch({ type: GET_CONTACTS, payload: res.data.results });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err });
    }
  };

  // Create Contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/contacts', contact, config);
      console.log('FROM ADD CONTACT: ', res);
      dispatch({ type: ADD_CONTACT, payload: res.data.results });
    } catch (err) {
      console.log(err);
      dispatch({ type: CONTACT_ERROR, payload: err });
    }
  };
  // Update Contact
  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);

      dispatch({ type: UPDATE_CONTACT, payload: res.data.results });
    } catch (err) {
      console.log(err);
      dispatch({ type: CONTACT_ERROR, payload: err });
    }
  };
  // Delete Contact
  const deleteContact = async id => {
    console.log('INSIDE DELETE');

    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err });
    }
  };
  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
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
        error: state.error,
        filtered: state.filtered,
        getAllContacts,
        clearContacts,
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