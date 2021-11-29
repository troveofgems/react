import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from "../../context/contact/Contact.context";

const ContactFilter = () => {
  const
    queryStr = useRef(),
    contactContext = useContext(ContactContext),
    {filterContacts, clearFilter, filtered} = contactContext;

  useEffect(() => {
    if(filtered === null) {
      queryStr.current.value = '';
    }
  });

  const onChange = evt => {
    if(queryStr.current.value !== '') {
      filterContacts(evt.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input ref={queryStr} type={"text"} placeholder={"Filter Contacts..."} onChange={onChange} />
    </form>
  );
};

export default ContactFilter;