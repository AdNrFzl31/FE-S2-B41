import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';s
import Image from "../assets/image/Logo1.png";

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//import Home from './pages/Home'
//import About from './pages/About'
//import Profile from './pages/Profile'
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';


function StatusOn() {
  return <h1>StatusOn</h1>;
}

function StatusOff() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div>
      <Button className="px-5 me-4" size="sm" variant="outline-danger" onClick={() => setShowLogin(true)}>
        Login
      </Button>

      <Button className="px-5 " size="sm" variant="danger" onClick={() => setShowRegister(true)}>
        Register
      </Button>

      <Login
        show={showLogin}
        onRegis={() => setShowLogin(false) & setShowRegister(true)}
        onHide={() => setShowLogin(false)}
      />

      <Register
        show={showRegister}
        onLogin={() => setShowRegister(false) & setShowLogin(true)}
        onHide={() => setShowRegister(false)}
      />

    </div>
  );

}
function Navs() {
  const [showStatus, setStatus] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link to="/">
            <img
              alt=""
              src={Image}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end gap-3">
          <Nav className="me-auto"></Nav>
          <Nav>
            
            {showStatus ?
              <StatusOn />
              :
              <StatusOff />
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navs