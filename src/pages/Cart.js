import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Button,
  Card,
  CardImg,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Stack,
} from "react-bootstrap"
import FileUpload from "../assets/image/FileUpload.png"
import Product1 from "../assets/image/Product1.png"
import Trash from "../assets/image/Trash.png"
import ModalPopUp from "../component/PopUP"

const style = {
  textTitle: {
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "49px",

    color: "#BD0707",
  },

  textRed: {
    color: "#BD0707",
  },

  textCenter: {
    textAlign: "center",
  },

  link: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
  },

  ImgProduct: {
    position: "relative",
    width: "350px",
  },

  // Image Product 1
  ImgLogo: {
    position: "absolute",
    width: "130px",
    height: "auto",
    top: "35%",
    left: "77%",
  },
}

function Cart() {
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false)

  const pay = []
  const [DataPay, setState] = useState({
    name: "",
    email: "",
    phone: "",
    posCode: "",
    address: "",
  })
  const addDataPay = JSON.parse(localStorage.getItem("DATA_PAY"))
  const DataCart = JSON.parse(localStorage.getItem("DATA_CART"))

  const handleOnChange = (e) => {
    setState({
      ...DataPay,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (addDataPay === null) {
      pay.push(DataPay)
      localStorage.setItem("DATA_PAY", JSON.stringify(pay))
    } else {
      addDataPay.forEach((element) => {
        pay.push(element)
      })
      pay.push(DataPay)
      localStorage.setItem("DATA_PAY", JSON.stringify(pay))
    }
  }

  return (
    <Container className="my-5">
      <Card className="mt-5" style={{ border: "white" }}>
        <Row>
          <Card.Title className="mb-5" style={style.textTitle}>
            My Cart
          </Card.Title>
          <Col sm={8} className="pe-5">
            <Card.Body className="p-0" style={{ width: "100%" }}>
              <Card.Body className="m-0 p-0" style={{ width: "100%" }}>
                <Card.Text style={style.textRed}>Review Your Order</Card.Text>
                <hr style={style.textRed} className="m-0" />
                <Stack>
                  {/* Data pembelian product */}
                  <Card.Body className="pe-0">
                    <Stack direction="horizontal" gap={4}>
                      <Card.Img src={Product1} style={{ width: "20%" }} />
                      <Stack direction="horizontal">
                        <Card.Body className="ps-0 me-5 w-100">
                          <Card.Title className="mb-2" style={style.textRed}>
                            Ice Coffe Palm Sugar
                          </Card.Title>
                          <Stack direction="horizontal">
                            <Card.Text
                              className="m-0"
                              style={{
                                fontSize: "15px",
                                color: "#974A4A",
                                fontWeight: "bold",
                              }}
                            >
                              Toping{" "}
                            </Card.Text>
                            <Card.Text
                              style={{ fontSize: "15px", color: "#BD0707" }}
                            >
                              : Bill Berry Boba, Bubble Tea Gelatin
                            </Card.Text>
                          </Stack>
                        </Card.Body>

                        <Card.Body className=" pe-0  ps-5 ms-5">
                          <Card.Text style={style.textRed}>Rp.33.000</Card.Text>
                          <Card.Img
                            src={Trash}
                            className="ms-5"
                            style={{ width: "25%" }}
                          />
                        </Card.Body>
                      </Stack>
                    </Stack>
                  </Card.Body>
                </Stack>
                <hr style={style.textRed} className="mt-0" />
              </Card.Body>
              <Stack direction="horizontal">
                <Card.Body style={{ width: "60%" }} className="px-0">
                  <hr style={style.textRed} className="m-0" />
                  <Stack direction="horizontal">
                    <Card.Body>
                      <Card.Text style={style.textRed}>Subtotal</Card.Text>
                      <Card.Text style={style.textRed}>Qty</Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Text style={style.textRed} className="text-end">
                        69.000
                      </Card.Text>
                      <Card.Text style={style.textRed} className="text-end">
                        2
                      </Card.Text>
                    </Card.Body>
                  </Stack>
                  <hr style={style.textRed} />
                  <Stack direction="horizontal">
                    <Card.Body>
                      <Card.Text style={style.textRed}>Total</Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Text style={style.textRed} className="text-end">
                        69.000
                      </Card.Text>
                    </Card.Body>
                  </Stack>
                </Card.Body>
                <Card.Body style={{ width: "40%" }}>
                  <Form.Group controlId="formFile" className="m-3">
                    <Form.Label className="w-100">
                      <Card
                        // className="px-3"
                        style={{
                          border: "2px solid #BD0707",
                          backgroundColor: "#E0C8C840",
                        }}
                      >
                        <CardImg
                          src={FileUpload}
                          className="w-25  m-auto my-3"
                        />
                        <Card.Text
                          className="m-auto mb-3"
                          style={{ color: "#68323280" }}
                        >
                          Attache of Transaction
                        </Card.Text>
                      </Card>
                    </Form.Label>
                    <Form.Control type="file" style={{ display: "none" }} />
                  </Form.Group>
                </Card.Body>
              </Stack>
            </Card.Body>
          </Col>
          <Col sm={4} className="pt-5">
            <Form
              onSubmit={handleOnSubmit}
              className="m-auto mt-3 d-grid gap-4 w-100"
            >
              <Form.Group className="mb-3 " controlId="name">
                <Form.Control
                  onChange={handleOnChange}
                  value={DataPay.name}
                  name="name"
                  style={{ border: "2px solid #BD0707" }}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  onChange={handleOnChange}
                  value={DataPay.email}
                  name="email"
                  style={{ border: "2px solid #BD0707" }}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Control
                  onChange={handleOnChange}
                  value={DataPay.phone}
                  name="phone"
                  style={{ border: "2px solid #BD0707" }}
                  type="number"
                  placeholder="Phone"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="poscode">
                <Form.Control
                  onChange={handleOnChange}
                  value={DataPay.posCode}
                  name="posCode"
                  style={{ border: "2px solid #BD0707" }}
                  type="number"
                  placeholder="Pos Code"
                />
              </Form.Group>

              <FloatingLabel
                className="mb-3"
                controlId="floatingTextarea2"
                label="Comments"
              >
                <Form.Control
                  onChange={handleOnChange}
                  value={DataPay.address}
                  name="address"
                  as="textarea"
                  placeholder="Address"
                  style={{
                    height: "100px",
                    resize: "none",
                    border: "2px solid #BD0707",
                  }}
                />
              </FloatingLabel>
              <>
                <Button
                  onClick={() => {
                    setModalShow(true)
                  }}
                  variant="outline-light"
                  style={{ backgroundColor: "#BD0707" }}
                  type="submit"
                >
                  Pay
                </Button>

                <ModalPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Cart
