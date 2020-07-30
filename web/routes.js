
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import LoginScreen from './screens/LoginScreen';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/LoginScreen" component={LoginScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
