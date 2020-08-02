import React, {Component} from 'react';
import MainNavbar from '../../components/MainNavbar'
import PrintersTabsList from '../../components/PrintersTabsList'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <MainNavbar />
        <PrintersTabsList />
      </>
    )
  }
}
