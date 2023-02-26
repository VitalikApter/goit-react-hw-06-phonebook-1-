import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';

import css from './PhoneBook.module.scss';

const PhoneBook = () => {

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.form}>
          <h2 className={css.title}>Phonebook</h2>
          <PhoneBookForm />
        </div>
        <ContactsFilter />

        <ContactsList />


      </div>
    </>
  );
};

export default PhoneBook;
