import PropTypes from 'prop-types';
import css from './ContactsFilter.module.scss';

const ContactsFilter = ({ handleChange, value }) => {
  return (
    <div className={css.contacts}>
      <h2 className={css.title}>Contacts</h2>
      <input
        value={value}
        name="filter"
        onChange={handleChange}
        className={css.filter}
        placeholder="add name"
      />
    </div>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
