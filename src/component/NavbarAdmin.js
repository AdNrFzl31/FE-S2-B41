import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import NavDropdown from 'react-bootstrap/NavDropdown';s
import Image from "../assets/image/Logo1.png";
import DropdownAdmin from "./DropdownAdmin";

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function NavsAdmin() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link href="/">
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
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end gap-3"
        >
          <Nav className="me-auto"></Nav>
          <DropdownAdmin/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavsAdmin;
