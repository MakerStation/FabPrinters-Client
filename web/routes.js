
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/home"/></Route>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/home" component={HomeScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
