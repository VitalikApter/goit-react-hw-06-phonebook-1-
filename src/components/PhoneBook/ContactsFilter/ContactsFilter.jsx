import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';



import css from './ContactsFilter.module.scss';

const ContactsFilter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));

  };
  return (
    <div className={css.contacts}>
      <h2 className={css.title}>Contacts</h2>
      <input
        value={filter}
        name="filter"
        onChange={handleFilter}
        className={css.filter}
        placeholder="add name"
      />
    </div>
  );
};

export default ContactsFilter;


