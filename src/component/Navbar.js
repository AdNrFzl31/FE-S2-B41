import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap"
import Image from "../assets/image/Logo1.png"
import Basket from "../assets/image/Basket.png"
import Login from "../pages/Login.js"
import Register from "../pages/Register.js"
import DropdownAdmin from "./DropdownAdmin"
import DropdownUser from "./DropdownUser"

function Navs() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"))
  const isLogin = JSON.parse(localStorage.getItem("DATA_USER"))

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
          <Nav>
            {DataUser === null ? (
              <>
                <Button
                  className="px-5 me-4"
                  size="sm"
                  variant="outline-danger"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
                <Button
                  className="px-5 "
                  size="sm"
                  variant="danger"
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </Button>

                <Login
                  show={showLogin}
                  onHide={() => setShowLogin(false)}
                  setShowLogin={setShowLogin}
                  setShowRegister={setShowRegister}
                />
                <Register
                  show={showRegister}
                  onHide={() => setShowRegister(false)}
                  setShowLogin={setShowLogin}
                  setShowRegister={setShowRegister}
                />
              </>
            ) : (
              <>
                {DataUser[0].role === "admin" ? (
                  // <>ini admin</>
                  // Navbar Admin
                  <DropdownAdmin />
                ) : (
                  <Stack direction="horizontal">
                    <Nav.Link href="/Cart" className="m-3">
                      <img
                        alt=""
                        src={Basket}
                        width="35"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Nav.Link>
                    <DropdownUser />
                  </Stack>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
