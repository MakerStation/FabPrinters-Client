import React, {Component, Suspense} from 'react';
import HorizontalScroll from '../../base_components/HorizontalScroll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSadTear} from '@fortawesome/free-regular-svg-icons'
import './PrintersTabsList.css'
import PrintersTabs from './PrintersTabs'
import ErrorBoundary from '../../base_components/ErrorBoundary'

export default class PrintersTabsList extends Component {
  constructor(props) {
    super(props)
  }


  reload(){
    this.forceUpdate()
  }

  render() {
    return (
      <HorizontalScroll>
        <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <PrintersTabs />
        </Suspense>
        </ErrorBoundary>
      </HorizontalScroll>
    )
  }

}
