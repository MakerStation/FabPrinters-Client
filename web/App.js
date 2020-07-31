import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import store, { persistor } from '../src/redux/store/index';
import Routes from './routes';
//import LoadingView from './screens/LoadingView';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
/*
const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);
*/
const App = () => (
      <Routes />
      )
export default App;
