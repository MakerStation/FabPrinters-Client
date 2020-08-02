import React from 'react';
import {fetchAllPrinters} from '../../../src/endpoints'
import {Alert, NavItem, NavLink, Badge, Row, Col, Button, Nav} from 'shards-react'
import './PrintersTabsList.css'

const resourcePrinters = fetchAllPrinters() //starts fetching printers

const PrintersTabs = () => {
  const data = resourcePrinters.read() //check if data is ready
  const status = <span><Badge theme="light"></Badge> Status not available</span>

  //width: 10000px needs to be changed with maxWidth of all the navitems
  return (
    <Nav style={{width: "10000px"}}>
    {data.map(printer => (
      <NavItem>
        <NavLink onClick={console.log(printer.id)} key={printer.id} className="printTab">
          <Row >
            <Col sm={8}><span className="TabTitle">{printer.name}</span></Col>
            <Col sm={4}><Button className="emergencyStopBtn" size="sm" theme="danger" onClick={console.log(printer.port)}><img className="emergencyStopIcon" src={require("../../../assets/img/Emergency-button.png")}/></Button></Col>
          </Row><br/>
          {status}
        </NavLink>
      </NavItem>
    ))}
    </Nav>
  )
}

export default PrintersTabs
