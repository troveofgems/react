import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from '../../context/contact/Contact.context';
import Spinner from "../layout/Spinner/Spinner";

const Contacts = () => {
  const
    contactContext = useContext(ContactContext),
    { contacts, filtered, getAllContacts, loading } = contactContext;

  useEffect(() => {
    getAllContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please Create A Contact To Start A List!</h4>
  }

  return (
    <>
      {!loading && contacts !== null ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} className={"item"}>
                <ContactItem contact={contact} />
              </CSSTransition>
              ))
            : contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={500} className={"item"}>
                <ContactItem contact={contact} />
              </CSSTransition>
              ))
          }
        </TransitionGroup>
      ) : <Spinner />}
    </>
  );
};

export default Contacts;