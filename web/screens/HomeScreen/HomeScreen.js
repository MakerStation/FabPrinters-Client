import React, {Component} from 'react';
import MainNavbar from '../../components/MainNavbar'
import PrintersTabsList from '../../components/PrintersTabsList'
import {Outlet} from 'react-router-dom'; //where to render things from nested routes

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <MainNavbar />
        <PrintersTabsList />

        <Outlet />
      </>
    )
  }
}
