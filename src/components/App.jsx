import PhoneBook from 'components/PhoneBook/PhoneBook';
import configureStore from 'redux/configureStore';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={configureStore}>
      <div>
        <PhoneBook />
      </div>
    </Provider>
  );
};

export default App;
