import { useState } from 'react';

import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import { useSelector, useDispatch } from 'react-redux';
import css from './PhoneBook.module.scss';

import { addContact } from 'redux/actions';

const PhoneBook = () => {
  const contacts = useSelector(configureStore => configureStore.contacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  
  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const contact = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName ||
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(contact);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name}. number: ${number} is already in contacts.`);
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  // const removeContact = id => {
  //   setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  // };

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
      );
    });

    return result;
  };

  const filteredContacts = getFilteredContacts();
  const isContacts = Boolean(filteredContacts.length);
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.form}>
          <h2 className={css.title}>Phonebook</h2>
          <PhoneBookForm onSubmit={handleAddContact} />
        </div>
        <ContactsFilter handleChange={handleFilter} />
        {isContacts && <ContactsList contacts={filteredContacts} />}
        {!isContacts && <p>No Contacts</p>}
      </div>
    </>
  );
};

export default PhoneBook;
