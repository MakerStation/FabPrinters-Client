import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../src/store/index';
import Routes from './routes';
import LoadingView from './screens/LoadingView';

export default class App extends Component {
render() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}
}
