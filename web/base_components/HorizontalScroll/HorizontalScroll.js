import React, {Component} from 'react';
import './HorizontalScroll.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default class HorizontalScroll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: true,
      right: false,
      hovering: false
    }
  }
  onMouseOver() {
    // this.setState({hovering: true})
  }
  onMouseOut() {
    // this.setState({hovering: false})
  }

  render() {
    return (
      <div className="HorizontalScroll">
        <div className="HorizontalScrollElements" onMouseOver={() => this.onMouseOver()} onMouseOut={() => this.onMouseOut()}>{this.props.children}</div>
      </div>
    );
  }
}
