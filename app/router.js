/* eslint-disable react/prop-types */
import React from 'react';
import { Drawer, Router, Scene } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';

const AppRouter = () => (
<Router>

  <Scene key="root" title="">
    <Scene
      key="loginScreen"
      component={LoginScreen}
      initial
    />
    <Scene
      key="signupScreen"
      component={SignupScreen}
    />
  </Scene>
</Router>
);

export default AppRouter;
