
import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"><Redirect to="/login"/></Route>
      <Route path="/login" ><LoginScreen /></Route>
      <Route path="/home" element={<HomeScreen />}>
        <Route path="/"><></></Route>
        <Route path="/:id" element={<div>Hi</div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
