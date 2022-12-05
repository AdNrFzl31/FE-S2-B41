import "bootstrap/dist/css/bootstrap.min.css"
import React, { useContext, useEffect, useState } from "react"

import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Stack,
  Badge,
} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import AddProduct from "../assets/image/AddProduct.png"
import AddToping from "../assets/image/AddToping.png"
import Basket from "../assets/image/Basket.png"
import Image from "../assets/image/Profil1.png"
import Logout from "../assets/image/Logout.png"
import User from "../assets/image/User.png"
import Login from "../pages/Login.js"
import Register from "../pages/Register.js"
import { useQuery } from "react-query"
import { API } from "../confiq/api"

function DropdownUser() {
  // const Loginstate = JSON.parse(localStorage.getItem("VALUE_LOGIN"))
  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  console.log(state.isLogin)
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    })
    navigate("/")
    // localStorage.removeItem("VALUE_LOGIN")
    // window.location.reload()
  }

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom-end"
      overlay={
        <Popover id="popover-basic">
          <Popover.Body>
            <Nav.Link
              href="/Profile"
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
            >
              <img
                alt=""
                src={User}
                style={{ width: "30px", marginRight: "15px" }}
              />
              Profile
            </Nav.Link>
          </Popover.Body>
          <hr />
          <Popover.Body>
            <Nav.Link
              onClick={logout}
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
            >
              <img
                alt=""
                src={Logout}
                style={{ width: "30px", marginRight: "15px" }}
              />{" "}
              Logout
            </Nav.Link>
          </Popover.Body>
        </Popover>
      }
      style={{
        width: "70px",
        heigth: "70px",
      }}
    >
      <img
        alt=""
        src={Image}
        className="d-inline-block align-top btn p-0 m-auto"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #bd0707",
        }}
      />
    </OverlayTrigger>
  )
}

function DropdownAdmin() {
  // const Loginstate = JSON.parse(localStorage.getItem("DATA_USER"))
  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  console.log(state.isLogin)
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    })
    navigate("/")
    // localStorage.removeItem("VALUE_LOGIN")
    // window.location.reload()
  }

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom-end"
      overlay={
        <Popover id="popover-basic">
          <Popover.Body>
            <Nav.Link
              href="/AddProduct"
              className="mt-2"
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
            >
              <img
                alt=""
                src={AddProduct}
                style={{ width: "30px", marginRight: "15px" }}
              />
              Add Product
            </Nav.Link>
            <Nav.Link
              href="/AddToping"
              className="mt-4"
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
            >
              <img
                alt=""
                src={AddToping}
                style={{ width: "30px", marginRight: "15px" }}
              />{" "}
              Add Toping
            </Nav.Link>
            <Nav.Link
              href="/ProductAdmin"
              className="mt-4"
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
            >
              <img
                alt=""
                src={AddProduct}
                style={{ width: "30px", marginRight: "15px" }}
              />{" "}
              Product List
            </Nav.Link>
            <Nav.Link
              href="/TopingAdmin"
              className="mt-4"
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
            >
              <img
                alt=""
                src={AddToping}
                style={{ width: "30px", marginRight: "15px" }}
              />{" "}
              Toping List
            </Nav.Link>
          </Popover.Body>
          <hr />
          <Popover.Body>
            <Nav.Link
              style={{
                fontWeight: "600",
                fontSize: "17px",
                alignItems: "center",
              }}
              onClick={logout}
            >
              <img
                alt=""
                src={Logout}
                style={{ width: "30px", marginRight: "15px" }}
              />{" "}
              Logout
            </Nav.Link>
          </Popover.Body>
        </Popover>
      }
    >
      <img
        alt=""
        src={Image}
        className="d-inline-block align-top btn p-0 m-auto "
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #bd0707",
        }}
      />
    </OverlayTrigger>
  )
}

function Navs() {
  const [state, dispatch] = useContext(UserContext)
  console.log("ini isi dari", state)

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const { data: order } = useQuery("ordersCache", async () => {
    const response = await API.get("/orders-id")
    return response.data.data
  })

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
            {state.isLogin === false ? (
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
                {state.user.role === "admin" ? (
                  // Navbar Admin
                  <DropdownAdmin />
                ) : (
                  // Navbar User
                  <Stack direction="horizontal">
                    <Nav.Link href="/Carts" className="position-relative m-3">
                      <img
                        alt=""
                        src={Basket}
                        width="35"
                        height="30"
                        className="d-inline-block align-top"
                      />
                      {order?.length >= 1 && (
                        <Badge
                          // style={{ top: "10%", left: "65%" }}
                          className="position-absolute translate-middle badge-position rounded-pill bg-danger p-1   border border-light rounded-circle"
                        >
                          {order?.length}
                        </Badge>
                      )}
                    </Nav.Link>
                    <DropdownUser
                    // userDropdown={userDropdown} logOut={logOut}
                    />
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
