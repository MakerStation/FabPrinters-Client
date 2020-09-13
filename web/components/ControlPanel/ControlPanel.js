import React, {Component} from 'react';
import {Row, Col, Badge, Slider} from 'shards-react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import Icon from '@mdi/react'
import {mdiPrinter3dNozzle, mdiSquareInc} from '@mdi/js'
import './ControlPanel.css'

export default class ControlPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Col className="controlPanel">
          <Row>
            <Badge outline theme="secondary"><Badge outline theme="info" className="positionBadge">X: 000.00</Badge><Badge outline theme="info" className="positionBadge">Y: 000.00</Badge><Badge outline theme="info" className="positionBadge">Z: 000.00</Badge></Badge></Row>
            <Row><Badge outline theme="secondary">
              <Badge outline theme="info" className="temperatureBadge">SELEZIONE ESTRUSORE (non disponibile al momento)</Badge><br/>
            <Badge outline theme="info" className="temperatureBadge"><FontAwesomeIcon icon={faCircle} className="circleRed"/> <Icon path={mdiPrinter3dNozzle} size={0.68} color="#00b8d8"/> XXX°C <input type="number" placeholder="0" className="temperatureNumberInput"/></Badge><br/>
              <Badge outline theme="info" className="temperatureBadge"><FontAwesomeIcon icon={faCircle} className="circleGreen"/> <Icon path={mdiSquareInc} size={0.68} color="#00b8d8"/> XXX°C <input type="number" placeholder="0" className="temperatureNumberInput"/></Badge><br/>
            </Badge>
          </Row>
          <Row>
            <Badge outline theme="secondary">
              <Badge outline theme="info" className="temperatureBadge">Print speed <br/>{100}% <Slider className="printParamsSlider" theme="info" onSlide={console.log("onSlide")} pips={{ mode: "steps", stepped: true, density: 5 }} connect={[true, false]} start={100} range={{min:1, max:200}}/></Badge>
              <Badge outline theme="info" className="temperatureBadge">Extrusion flow rate <br/>{100}% <Slider className="printParamsSlider" theme="info" onSlide={console.log("onSlide")} connect={[true, false]} start={100} range={{min:1, max:200}}/></Badge>
            </Badge>
          </Row>
          <Row>Altri comandi (da aggiungere)</Row>
        </Col>
      </>
    );
  }
}
