import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
  textLogin: {
    fontFamily: "Avenir",
    fontStyle: "normal",
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

function Register({ show, onHide, setShowLogin, setShowRegister }) {
  const [dataRegis, setState] = useState({
    id: 0,
    fullname: "",
    email: "",
    password: "",
    imgProfil: "",
    role: "user",
  })

  const addDataUser = JSON.parse(localStorage.getItem("DATA_USER"))

  const handleOnChange = (e) => {
    setState({
      ...dataRegis,
      [e.target.name]: e.target.value,
    })
  }

  const users = []
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (addDataUser === null) {
      users.push(dataRegis)
      localStorage.setItem("DATA_USER", JSON.stringify(users))
    } else {
      for (let i = 0; i < addDataUser.length; i++) {
        users.push(addDataUser[i])
      }
      dataRegis.id = addDataUser.length
      users.push(dataRegis)
      localStorage.setItem("DATA_USER", JSON.stringify(users))
    }

    setShowRegister(false)
    setShowLogin(true)
  }

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Body>
        <Modal.Title style={style.textLogin}>Register</Modal.Title>
        <Form
          onSubmit={handleOnSubmit}
          className="w-100 m-auto mt-3 d-grid gap-2"
        >
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Control
              onChange={handleOnChange}
              name="fullname"
              style={{
                border: "2px solid #BD0707",
                backgroundColor: "#E0C8C840",
              }}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              onChange={handleOnChange}
              name="email"
              style={{
                border: "2px solid #BD0707",
                backgroundColor: "#E0C8C840",
              }}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              onChange={handleOnChange}
              name="password"
              style={{
                border: "2px solid #BD0707",
                backgroundColor: "#E0C8C840",
              }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imgProfil">
            <Form.Control
              onChange={handleOnChange}
              name="imgProfil"
              style={{
                border: "2px solid #BD0707",
                backgroundColor: "#E0C8C840",
              }}
              type="text"
              placeholder="Image Profil"
            />
          </Form.Group>
          <Button variant="outline-light" style={style.bgColor} type="submit">
            Register
          </Button>
          <Form.Label style={style.textCenter}>
            Already have an account ? Klik
            <Link
              className="ms-1"
              onClick={() => {
                setShowRegister(false)
                setShowLogin(true)
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

export default Register
