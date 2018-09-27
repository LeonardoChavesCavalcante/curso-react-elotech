import React, { Component } from 'react';
import logo from './tatu.png';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Col, Button } from 'react-bootstrap'

import Configuracao from './Configuracao/Configuracao';
import Profile from './Profile/Profile';
import Login from './Login/Login';

import HeaderTatuiter from './components/HeaderTatuiter';

class App extends Component {
  render() {
    return (
      <div className="AppTatuiter">
        <BrowserRouter>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
              <Col md={1}  >
                <img src={logo} className="App-logo" alt="logo" />
              </Col>
              <Col md={8}  >
                <h1 className="HeaderTatuiter"> Tatuiter </h1>
              </Col>
              <Col md={3}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to="/perfil"> <Button variant="default" className="myButton"> Meu Pefill </Button> </Link> {" "}
                    <Link to="/configuracao"> <Button variant="default" className="myButton"> Configuração </Button> </Link>
                    <Link to="/login"> <Button variant="default" className="myButton"> Sair </Button> </Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Navbar>

            <Switch>
              <Route exact path="/perfil" component={Profile} />
              <Route path="/configuracao" component={Configuracao} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
