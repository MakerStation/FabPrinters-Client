import React, {Component, Suspense} from 'react';
import CommandList from './CommandList'
import {fetchAllCommands} from '../../../src/endpoints'
import ErrorBoundary from '../../base_components/ErrorBoundary'

export default class CommandLog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="scrollableDiv" className="scrollableDiv">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <CommandList id="1"/>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}
