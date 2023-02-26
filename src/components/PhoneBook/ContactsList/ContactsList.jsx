import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';


import css from './ContactsList.module.scss';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilterContacts);
  const contacts = filteredContacts;
  const dispatch = useDispatch();
  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const isContacts = Boolean(filteredContacts.length);
  const contactsList = contacts.map(({ id, name, number }) =>
  (
    <li key={id} className={css.item}>
      {name}: {number}
      <button onClick={() => handleRemoveContact(id)} className={css.delete}>
        Delete Contact
      </button>
    </li>
  ));

  return (
    <div>
      {isContacts && (<ol className={css.list}>{contactsList}</ol>)}
      {!isContacts && <p>No Contacts</p>}
    </div>
  );
};

export default ContactsList;


