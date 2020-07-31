import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../src/redux/store/index';
import Routes from './routes';
import LoadingView from './screens/LoadingView';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
