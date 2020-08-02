import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'shards-react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCog} from '@fortawesome/free-solid-svg-icons'
import './MainNavbar.css'

export default class MainNavbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Navbar type="dark" expand="true" theme="primary">
        <NavbarBrand href="/home">Home</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href="/settings" className="NavbarSettings"><FontAwesomeIcon icon={faCog}/></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
