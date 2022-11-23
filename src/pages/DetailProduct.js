import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import Approve from "../assets/image/Approve.png"

const style = {
  card: {
    width: "100%",
    height: "500px",
    position: "relative",
  },

  imgProduct: {
    width: "30%",
    height: "80%",
    // position: "absolute",
  },

  cardBody: {
    width: "50%",
  },

  cardTitle: {
    fontSize: "47px",
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    color: "#BD0707",
  },

  cardText: {
    color: "#974A4A",
  },

  textToping: {
    color: "#BD0707",
    textAlign: "center",
  },

  imgToping: {
    width: "25%",
    height: "auto",
    marginLeft: "40%",
  },

  bgColor: {
    backgroundColor: "#BD0707",
  },
}
function DetailProduct() {
  const navigate = useNavigate()

  const getProductURL = useLocation()
  const getProductId = parseInt(getProductURL.pathname.replace(/\D/g, ""))

  const DataLogin = JSON.parse(localStorage.getItem("VALUE_LOGIN"))

  const Product = []
  const getProduct = () => {
    if (typeof Storage === "undefined") {
      alert("cant store user")
    }

    const DataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))

    if (DataProduct !== null) {
      for (let i = 0; i < DataProduct.length; i++) {
        if (DataProduct[i].id === getProductId) {
          Product.push(DataProduct[i])
        }
      }
    }
  }

  const Topings = []
  const getToppings = () => {
    if (typeof Storage === "undefined") {
      alert("cant store user")
    }

    const DataToping = JSON.parse(localStorage.getItem("DATA_TOPING"))

    if (DataToping !== null) {
      for (let i = 0; i < DataToping.length; i++) {
        Topings.push(DataToping[i])
      }
    }
  }

  const formatIDR = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })

  const [topingCheck, setTopingCheck] = useState([])
  const [topingPrice, setTopingPrice] = useState(0)

  getProduct()
  getToppings()

  const handleChecked = (id, price) => {
    const filterID = topingCheck.filter((e) => e === id)
    if (filterID[0] !== id) {
      setTopingCheck([...topingCheck, id])
      setTopingPrice(topingPrice + price)
    } else {
      setTopingCheck(topingCheck.filter((e) => e !== id))
      setTopingPrice(topingPrice - price)
    }
  }

  const dataCart = []
  const getCartUser = () => {
    if (typeof Storage === "undefined") {
      alert("cant store user")
    }

    const data = JSON.parse(
      localStorage.getItem(`DATA_CART_${DataLogin[0].id}`)
    )

    if (data !== null) {
      for (let i = 0; i < data.length; i++) {
        dataCart.push(data[i])
      }
    }
  }

  const saveCartUser = () => {
    const currentProduct = {
      cartId: +new Date(),
      itemId: Product[0].id,
      toping: topingCheck,
      total: Product[0].price + topingPrice,
      isPaid: false,
    }

    dataCart.push(currentProduct)
    localStorage.setItem(
      `DATA_CART_${DataLogin[0].id}`,
      JSON.stringify(dataCart)
    )
  }

  const handleOnSubmit = () => {
    getCartUser()
    saveCartUser()
    navigate("/Cart")
  }

  return (
    <Container className="my-5">
      <Card border="white" style={style.card}>
        <Row>
          <Card.Img
            alt=""
            style={style.imgProduct}
            src={Product[0].imgProduct}
          />
          <Card.Body className="my-2" style={style.cardBody}>
            <Card.Title style={style.cardTitle}>
              {Product[0].nameProduct}
            </Card.Title>
            <Card.Text style={style.cardText}>
              {formatIDR.format(Product[0].price)}
            </Card.Text>

            <div className="mt-5">
              <Card.Text style={style.cardText}>Toping</Card.Text>
              <Row xs="4" className="m-2">
                {/* Toping */}
                {Topings.map((toping) => (
                  <div
                    className="p-3"
                    onClick={() => handleChecked(toping.id, toping.price)}
                  >
                    <div className="position-relative">
                      <Card.Img
                        alt=""
                        style={style.imgToping}
                        src={toping.imgToping}
                      />
                      <Badge
                        style={{ top: "10%", left: "65%" }}
                        className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                      >
                        {topingCheck.filter(
                          (Element) => Element === toping.id
                        )[0] === toping.id ? (
                          <img alt="" style={{ width: "20px" }} src={Approve} />
                        ) : (
                          <></>
                        )}
                      </Badge>
                    </div>
                    {/* <Card.Img alt="" style={style.imgToping} src={ListToping.order} /> */}
                    <Card.Text className="m-0" style={style.textToping}>
                      {toping.nameToping}
                    </Card.Text>
                    <Card.Text style={style.textToping}>
                      {formatIDR.format(toping.price)}
                    </Card.Text>
                  </div>
                ))}
              </Row>
            </div>
            <Row className="m-4">
              <Col xs={12} md={10}>
                <Card.Text style={style.cardText}>Total</Card.Text>
              </Col>
              <Col xs={6} md={2}>
                <Card.Text style={style.cardText}>
                  {formatIDR.format(Product[0].price + topingPrice)}
                </Card.Text>
              </Col>
            </Row>
            <Button
              className="w-100"
              variant="outline-light"
              style={style.bgColor}
              onClick={handleOnSubmit}
            >
              Add Cart
            </Button>
          </Card.Body>
        </Row>
      </Card>
    </Container>
  )
}

export default DetailProduct
