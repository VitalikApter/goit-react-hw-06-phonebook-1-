import { useState } from 'react';



import { addContact } from 'redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';

import css from '../PhoneBook.module.scss';

const PhoneBookForm = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const allContacts = useSelector(Store => Store.contacts);
  const dispatch = useDispatch();


  
  const handleAddContact = ({ name, number }) => {
    
    if (isDublicate(name, number)) {
      alert(`${name}. number: ${number} is already in contacts.`);
      return false;
    }

    dispatch(addContact({ name, number }));
  };

  

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

  
  

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    setState({ name: '', number: '' });
  };

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit}>
      <div className={css.formGroup}>
        <label>
          Name <br />
          <input
            onChange={handleChange}
            value={name}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div className={css.formGroup}>
        <label>
          Number <br />
          <input
            onChange={handleChange}
            value={number}
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>

      <button className={css.button_add} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default PhoneBookForm;


