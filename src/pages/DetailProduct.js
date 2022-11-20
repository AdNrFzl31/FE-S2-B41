import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, Col, Container, Row, Badge } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Approve from "../assets/image/Approve.png"
import ListProduct from "../component/ListProduct"
import ListToping from "../component/ListToping"
import SelectToping from "../component/SelectToping"

// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

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
  const { id } = useParams()
  const DataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))
  const DataToping = JSON.parse(localStorage.getItem("DATA_TOPING"))

  const formatIDR = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })

  const [topingCheck, setTopingCheck] = useState([])
  const [topingPrice, setTopingPrice] = useState(0)

  const handleChecked = (id, price) => {
    let filterID = topingCheck.filter((e) => e === id)
    if (filterID[0] !== id) {
      setTopingCheck([...topingCheck, id])
      setTopingPrice(topingPrice + price)
    } else {
      setTopingCheck(topingCheck.filter((e) => e !== id))
      setTopingPrice(topingPrice - price)
    }
  }

  return (
    <Container className="my-5">
      <Card border="white" style={style.card}>
        <Row>
          <Card.Img
            alt=""
            style={style.imgProduct}
            src={DataProduct[id].imgProduct}
          />
          <Card.Body className="my-2" style={style.cardBody}>
            <Card.Title style={style.cardTitle}>
              {DataProduct[id].nameProduct}
            </Card.Title>
            <Card.Text style={style.cardText}>
              {formatIDR.format(DataProduct[id].price)}
            </Card.Text>

            <div className="mt-5">
              <Card.Text style={style.cardText}>Toping</Card.Text>
              <Row xs="4" className="m-2">
                {/* Toping */}
                {DataToping.map((toping) => (
                  <div className="p-3">
                    <div
                      className="position-relative"
                      onClick={() => handleChecked(toping.id, toping.price)}
                    >
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
                  {formatIDR.format(DataProduct[id].price + topingPrice)}
                </Card.Text>
              </Col>
            </Row>
            <Button
              className="w-100"
              variant="outline-light"
              style={style.bgColor}
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
