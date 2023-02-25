import PhoneBook from 'components/PhoneBook/PhoneBook';
import { Store, persistor } from 'redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <PhoneBook />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
