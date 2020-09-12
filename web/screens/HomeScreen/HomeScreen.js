import React, {Component} from 'react';
import MainNavbar from '../../components/MainNavbar'
import PrintersTabsList from '../../components/PrintersTabsList'
import {Outlet} from 'react-router-dom'; //where to render things from nested routes
import CommandLog from '../../components/CommandLog'
import ErrorBoundary from '../../base_components/ErrorBoundary'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <MainNavbar />
          <PrintersTabsList />
          <CommandLog />
          <Outlet />
        </ErrorBoundary>
      </>
    )
  }
}
