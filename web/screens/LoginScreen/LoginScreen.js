import React, {Component, useState} from 'react';
import styled from 'styled-components';
import {Form, FormInput, InputGroup, InputGroupText, InputGroupAddon, Button,
        Card, CardTitle, CardBody, CardFooter, CardHeader} from 'shards-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import './LoginScreen.css'

export default function LoginScreen(){
  const [username, setUsername] = useState("") //local state
  const [password, setPassword] = useState("")

  function validateInput() {
    return username.length > 0 && password.length > 0
  }

  function onSubmit(event){
    event.preventDefault();
  }

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
                <FormInput autoFocus placeholder="username" id="#username" onChange={e => setUsername(e.target.value)}/>
              </InputGroup>
            </CardBody>
            <CardBody className="LoginCardBodyPassword">
              <InputGroup>
                <InputGroupAddon type="prepend">
                  <InputGroupText><FontAwesomeIcon icon={faLock}/></InputGroupText>
                </InputGroupAddon>
                <FormInput type="password" placeholder="password" id="#password" onChange={e => setUsername(e.target.value)}/>
              </InputGroup>
            </CardBody>
            <CardFooter className="LoginCardFooter"><Button onClick={onSubmit}>Login</Button></CardFooter>
          </Form>
        </Card>
      </div>
    )
}
