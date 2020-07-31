
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/login"/></Route>
      <Route exact path="/login" component={LoginScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
