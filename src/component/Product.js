import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { Card, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"

const style = {
  card: {
    width: "16rem",
    backgroundColor: "#F6DADA",
    padding: "0",
  },

  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#BD0707",
  },

  price: {
    color: "#974A4A",
    fontSize: "14px",
  },

  ImgProduct: {
    position: "relative",
    width: "100%",
  },

  // Image Product 1
  ImgLogo: {
    position: "absolute",
    width: "90px",
    height: "auto",
    top: "27%",
    left: "33%",
  },

  // Image Product 2
  ImgLogo2: {
    position: "absolute",
    width: "90px",
    height: "auto",
    top: "27%",
    left: "34%",
  },

  // Image Product 3
  ImgLogo3: {
    position: "absolute",
    width: "90px",
    height: "auto",
    top: "27%",
    left: "34%",
  },

  // Image Product 4
  ImgLogo4: {
    position: "absolute",
    width: "90px",
    height: "auto",
    top: "38%",
    left: "36%",
  },
}

function Products() {
  const DataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))

  return (
    <Row className="d-flex gap-4 justify-content-center">
      {DataProduct.map((product) => (
        <Product
          id={product.id}
          name={product.nameProduct}
          order={product.imgProduct}
          price={product.price}
        />
      ))}
    </Row>
  )
}

function Product(props) {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"))
  // const handleOnClick = () => {
  //   if (DataUser === null) {x
  //     showLogin
  //   } else {
  //     navigate(`/DetailProduct/${props.id}`)
  //   }
  // }

  return (
    <>
      <Card
        border="light"
        style={style.card}
        onClick={() =>
          DataUser === null
            ? setShowLogin(true)
            : navigate(`/DetailProduct/${props.id}`)
        }
      >
        <Card.Img variant="top" src={props.order} style={style.ImgProduct} />
        <Card.Body>
          <Card.Title style={style.title}>{props.name}</Card.Title>
          <Card.Text style={style.price}>IDR {props.price}</Card.Text>
        </Card.Body>
      </Card>

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
  )
}

export default Products
