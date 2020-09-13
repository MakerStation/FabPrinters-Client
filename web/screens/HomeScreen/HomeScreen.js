import React, {Component} from 'react';
import MainNavbar from '../../components/MainNavbar'
import PrintersTabsList from '../../components/PrintersTabsList'
import {Outlet} from 'react-router-dom'; //where to render things from nested routes
import CommandLog from '../../components/CommandLog'
import ErrorBoundary from '../../base_components/ErrorBoundary'
import ControlPanel from '../../components/ControlPanel'

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
          {/*<CommandLog />*/}
          <ControlPanel />
          <Outlet />
        </ErrorBoundary>
      </>
    )
  }
}
