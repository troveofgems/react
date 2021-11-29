import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/Contact.context';

const ContactForm = (props) => {
  const
    contactContext = useContext(ContactContext),
    {addContact, current, clearCurrentContact, updateContact} = contactContext,
    [contact, setContact] = useState({
      name: '',
      email: '',
      phone: '',
      contactType: 'personal'
    });


  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        contactType: 'personal'
      });
    }
  }, [contactContext, current]);

  const {name, email, phone, contactType} = contact;

  const clearAll = () => {
    clearCurrentContact();
  };
  const onChange = evt => setContact({...contact, [evt.target.name]: evt.target.value});
  const onSubmit = evt => {
    evt.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      contactType: 'personal'
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className={"text-primary"}>
        {current ? 'Update Contact' : 'New Contact'}
      </h2>
      <input
        type={'text'}
        placeholder={'John Hammond'}
        name={'name'}
        value={name}
        onChange={onChange}
      />
      <input
        type={'email'}
        placeholder={'jhammond@jurassic.park'}
        name={'email'}
        value={email}
        onChange={onChange}
      />
      <input
        type={'text'}
        placeholder={'+009 411 5555'}
        name={'phone'}
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type={'radio'}
        name={'contactType'}
        value={'personal'}
        checked={contactType === 'personal'}
        onChange={onChange}
      />Personal{' '}
      <input
        type={'radio'}
        name={'contactType'}
        value={'professional'}
        checked={contactType === 'professional'}
        onChange={onChange}
      />Professional{' '}
      <div>
        <input type={'submit'} value={'Create Contact'} className={"btn btn-primary btn-block"}/>
      </div>
      {current && (
        <div>
          <button className={"btn btn-light btn-block"} onClick={clearAll}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;