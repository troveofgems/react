import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from '../../context/contact/Contact.context';

const Contacts = () => {
  const
    contactContext = useContext(ContactContext),
    { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please Create A Contact To Start A List!</h4>
  }

  return (
    <>
      <TransitionGroup>
      {filtered !== null
        ? filtered.map(contact => (
          <CSSTransition key={contact.id} timeout={500} className={"item"}>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))
        : contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={500} className={"item"}>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))
      }
      </TransitionGroup>
    </>
  );
};

export default Contacts;