
import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/"><Redirect to="/login"/></Route>
      <Route exact path="/login" ><LoginScreen /></Route>
      <Route exact path="/home" ><HomeScreen /></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
