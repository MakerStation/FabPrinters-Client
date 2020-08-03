import React, {Component, useState} from 'react';
import {Form, FormInput, InputGroup, InputGroupText, InputGroupAddon, Button,
        Card, CardTitle, CardBody, CardFooter, CardHeader} from 'shards-react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import './LoginScreen.css'

export default class LoginScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  validateInput() {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  onSubmit(event){
    event.preventDefault();
    console.log(event)
  }

  render() {
    return (
      <div className="Login">
        <Card className="LoginCard">
          <CardHeader><CardTitle className="LoginCardTitle">Login</CardTitle></CardHeader>
          <Form>
            <CardBody className="LoginCardBodyUsername">
              <InputGroup>
                <InputGroupAddon type="prepend">
                  <InputGroupText><FontAwesomeIcon icon={faUser}/></InputGroupText>
                </InputGroupAddon>
                <FormInput autoFocus placeholder="Username" id="#username" onChange={e => this.setState({username: e.target.value})} autoComplete="username"/>
              </InputGroup>
            </CardBody>
            <CardBody className="LoginCardBodyPassword">
              <InputGroup>
                <InputGroupAddon type="prepend">
                  <InputGroupText><FontAwesomeIcon icon={faLock}/></InputGroupText>
                </InputGroupAddon>
                <FormInput type="password" placeholder="Password" id="#password" onChange={e => this.setState({password: e.target.value})} autoComplete="password"/>
              </InputGroup>
            </CardBody>
          <CardFooter className="LoginCardFooter">
            <Button onClick={this.onSubmit} disabled={!this.validateInput()}>Login</Button>
          </CardFooter>
          </Form>
        </Card>
      </div>
    )
  }
}
