import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onError(error, errorInfo)
  }

  render() {
    if(this.state.error) {
      return this.props.errorElement
    } else {
      return this.props.children
    }
  }
}
ErrorBoundary.propTypes = {
  onError: PropTypes.func,
  errorElement: PropTypes.node
}

ErrorBoundary.defaultProps = {
  onError: function(error, errorInfo) { console.log(error + " - "+ errorInfo) },
  errorElement: <div>{"Something went wrong :("}</div>
}
