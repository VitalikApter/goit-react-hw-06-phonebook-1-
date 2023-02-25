import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import { useSelector, useDispatch } from 'react-redux';
import css from './PhoneBook.module.scss';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  getAllContacts,
  getFilterContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const PhoneBook = () => {
  const filteredContacts = useSelector(getFilterContacts);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const contact = allContacts.find(({ name, number }) => {
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

    dispatch(addContact({ name, number }));
  };

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts.length);
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.form}>
          <h2 className={css.title}>Phonebook</h2>
          <PhoneBookForm onSubmit={handleAddContact} />
        </div>
        <ContactsFilter value={filter} handleChange={handleFilter} />
        {isContacts && (
          <ContactsList
            removeContact={handleRemoveContact}
            contacts={filteredContacts}
          />
        )}
        {!isContacts && <p>No Contacts</p>}
      </div>
    </>
  );
};

export default PhoneBook;
