import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Product from "../assets/image/Product1.png";
import Logo from "../assets/image/Logo2.png";
import Toping1 from "../assets/image/Toping1.png";
import Toping2 from "../assets/image/Toping2.png";
import Toping3 from "../assets/image/Toping3.png";
import Toping4 from "../assets/image/Toping4.png";
import Toping5 from "../assets/image/Toping5.png";
import Toping6 from "../assets/image/Toping6.png";
import Toping7 from "../assets/image/Toping7.png";
import Toping8 from "../assets/image/Toping8.png";

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

  ImgLogo: {
    position: "absolute",
    width: "125px",
    height: "auto",
    top: "26%",
    left: "9%",
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
};
function DetailProduct() {
  return (
    <Container className="my-5">
      <Card border="white" style={style.card}>
        <Row>
          <Card.Img style={style.imgProduct} src={Product} />
          <Card.Img src={Logo} style={style.ImgLogo} />
          <Card.Body className="my-2" style={style.cardBody}>
            
            <Card.Title style={style.cardTitle}>
              Ice Coffee Palm Sugar
            </Card.Title>
            <Card.Text style={style.cardText}>Rp.27.000</Card.Text>

            <div className="mt-5">
              <Card.Text style={style.cardText}>Toping</Card.Text>
              <Row xs="4" className="m-2">
                {/* Toping 1 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping1} />
                  <Card.Text style={style.textToping}>
                    Bubble Tea Gelatin
                  </Card.Text>
                </div>

                {/* Toping 2 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping2} />
                  <Card.Text style={style.textToping}>Manggo</Card.Text>
                </div>

                {/* Toping 3 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping3} />
                  <Card.Text style={style.textToping}>Green Coconut</Card.Text>
                </div>

                {/* Toping 4 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping4} />
                  <Card.Text style={style.textToping}>Boba Manggo</Card.Text>
                </div>
              </Row>
              <Row xs="4" className="m-2">
                {/* Toping 5 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping5} />
                  <Card.Text style={style.textToping}>
                    Bill Berry Boba
                  </Card.Text>
                </div>

                {/* Toping 6 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping6} />
                  <Card.Text style={style.textToping}>
                    Kiwi Popping Pearl
                  </Card.Text>
                </div>

                {/* Toping 7 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping7} />
                  <Card.Text style={style.textToping}>
                    Matcha Cantaloupe
                  </Card.Text>
                </div>

                {/* Toping 8 */}
                <div>
                  <Card.Img style={style.imgToping} src={Toping8} />
                  <Card.Text style={style.textToping}>
                    Strawberry Popping
                  </Card.Text>
                </div>
              </Row>
            </div>
            <Row className="m-4">
              <Col xs={12} md={10}>
                <Card.Text style={style.cardText}>Total</Card.Text>
              </Col>
              <Col xs={6} md={2}>
                <Card.Text style={style.cardText}>Rp.27.000</Card.Text>
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
  );
}

export default DetailProduct;
