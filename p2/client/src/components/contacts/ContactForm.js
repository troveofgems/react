import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/Contact.context';

const ContactForm = (props) => {
  const
    contactContext = useContext(ContactContext),
    {addContact, current, clearCurrentContact, updateContact} = contactContext,
    [contact, setContact] = useState({
      firstName: '',
      lastName: '',
      company: '',
      birthday: '',
      notes: '',
      email: '',
      telephone: '',
      url: '',
      contactType: 'personal'
    });


  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        firstName: '',
        lastName: '',
        company: '',
        birthday: '',
        notes: '',
        email: '',
        telephone: '',
        url: '',
        contactType: 'personal'
      });
    }
  }, [contactContext, current]);

  const {firstName, lastName, company, birthday, notes, url, email, telephone, contactType} = contact;

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
      firstName: '',
      lastName: '',
      company: '',
      birthday: '',
      notes: '',
      email: '',
      telephone: '',
      url: '',
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
        placeholder={'John'}
        name={'firstName'}
        value={firstName}
        onChange={onChange}
      />
      <input
        type={'text'}
        placeholder={'Hammond'}
        name={'lastName'}
        value={lastName}
        onChange={onChange}
      />
      <input
        type={'text'}
        placeholder={'Jurassic Park'}
        name={'company'}
        value={company}
        onChange={onChange}
      />
      <input
        type={'text'}
        placeholder={'Date Of Birth - MM/DD/YYYY'}
        name={'birthday'}
        value={birthday}
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
        name={'telephone'}
        value={telephone}
        onChange={onChange}
      />
      <input
        type={'text'}
        placeholder={'https://jurassic.park'}
        name={'url'}
        value={url}
        onChange={onChange}
      />
      <h5>Notes</h5>
      <input
        type={'text'}
        placeholder={'Additional Notes Or Information'}
        name={'notes'}
        value={notes}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type={'radio'}
        name={'contactType'}
        value={'personal'}
        checked={contactType === 'personal'}
        onChange={onChange}
      />{' '}Personal{' '}
      <input
        type={'radio'}
        name={'contactType'}
        value={'professional'}
        checked={contactType === 'professional'}
        onChange={onChange}
      />{' '}Professional{' '}
      <div>
        <input type={'submit'} value={current ? 'Update Contact' : 'Create Contact'} className={"btn btn-primary btn-block"}/>
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