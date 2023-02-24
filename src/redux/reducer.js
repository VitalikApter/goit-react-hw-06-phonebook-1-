import { ADD_CONTACT } from './types';

const initialStore = {
  contacts: [],
  filter: '',
};

const reducer = (configureStore = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...configureStore, action.payload];
      return { ...configureStore, contacts: newContacts };
    default:
      return configureStore;
  }
};

export default reducer;
