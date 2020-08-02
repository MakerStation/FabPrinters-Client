import React, {Component} from 'react';
import axios from 'axios'
import config from '../../../config.js'
import HorizontalScroll from '../../base_components/HorizontalScroll'
import {Alert, NavItem, NavLink, Badge} from 'shards-react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSadTear} from '@fortawesome/free-regular-svg-icons'
import './PrintersTabsList.css'

//Not working at the moment, needs to be rebuild with <Suspense> for data fetching

export default class PrintersTabsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      printers: null
    }

  }

  reload(){
    this.forceUpdate()
  }

  shouldComponentUpdate(){
    return this.state.loaded
  }
  componentWillMount(){
    this.setPrinters().then(() => this.setState({loaded: true}))
  }

  getPrinters(){
    return new Promise((resolve, reject) => {
      axios.post(config.serverUrl + "/findprinter", {})
      .then(response => {
        if(!response) reject("No printers available")
        else resolve(response)
      })
      .catch(err => {reject("Internal server error"); console.log(err)})
    })
  }


  setPrinters(){
    this.setState({loaded: false})
    return new Promise((resolve, reject) => {
      this.getPrinters()
      .then(printers => {
        this.setState({printers: printers.data})
      })
      .catch(err => {
        this.printers.push(<Alert theme="danger" open={true} dismissible={this.reload}>
            <FontAwesomeIcon icon={faSadTear}/>Something went wrong, close this alert to reload the printers
          </Alert>)
      })
      resolve()
    })
  }

  renderPrintersTabs(data){
    if(!data){
      return <div>Loading...</div>
    }
    var printers = []
    var status = <span><Badge theme="light"></Badge> Status not available</span>
    data.forEach(printer => {
        printers.push(
            <NavItem>
              <NavLink onClick={console.log(printer.id)} key={printer.id} className="printTab">
                <Row >
                  <Col sm={8}><span className="TabTitle">{printer.name}</span></Col>
                  <Col sm={4}><Button className="emergencyStopBtn" size="sm" theme="danger" onClick={console.log(printer.port)}><img className="emergencyStopIcon" src={require("../../../assets/img/Emergency-button.png")}/></Button></Col>
                </Row><br/>
                {status}
              </NavLink>
            </NavItem>)
        })
    return printers
  }


  render() {
    if(!this.state.loaded){
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <HorizontalScroll>
        {this.renderPrintersTabs(this.state.data)}
        </HorizontalScroll>
      )
    }
  }

}
