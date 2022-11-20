import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
  textLogin: {
    fontWeight: "900",
    fontSize: "36px",
    lineHeight: "49px",

    color: "#BD0707",
  },

  textRed: {
    color: "#BD0707",
  },

  bgColor: {
    backgroundColor: "#BD0707",
  },

  textCenter: {
    textAlign: "center",
  },

  link: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
  },
}

const Login = ({ show, onHide, setShowLogin, setShowRegister }) => {
  const users = []
  const [dataLogin, setState] = useState({
    email: "",
    password: "",
  })

  const LoginDataUser = JSON.parse(localStorage.getItem("DATA_USER"))

  const handleOnChange = (e) => {
    setState({
      ...dataLogin,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    window.location.reload()
    LoginDataUser.forEach((element) => {
      if (
        dataLogin.email === element.email &&
        dataLogin.password === element.password
      ) {
        users.push(element)
        localStorage.setItem("VALUE_LOGIN", JSON.stringify(users))
        setShowLogin(false)
      } else {
        console.log(LoginDataUser)
      }
    })
  }

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Body>
        <Modal.Title style={style.textLogin} className="mb-3">
          Login
        </Modal.Title>
        <Form
          onSubmit={handleOnSubmit}
          className="w-100 m-auto mt-3 d-grid gap-2"
        >
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              onChange={handleOnChange}
              value={dataLogin.email}
              name="email"
              style={{ border: "2px solid #BD0707" }}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handleOnChange}
              value={dataLogin.password}
              name="password"
              style={{ border: "2px solid #BD0707" }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="outline-light" style={style.bgColor} type="submit">
            Submit
          </Button>
          <Form.Label style={style.textCenter}>
            Don't have an account ? Klik
            <Link
              className="ms-1"
              onClick={() => {
                setShowLogin(false)
                setShowRegister(true)
              }}
              style={style.link}
            >
              Here
            </Link>
          </Form.Label>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Login
