import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
// import Profil from "../assets/image/Profil2.png";
// import Cards from "../component/Cards";
import Products from "../assets/image/Product1.png";
// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
  cardContainer: {
    width: "90%",
    height: "500px",
    position: "relative",
    // border: "white",
  },

  card: {
    width: "45%",
    height: "200px",
    position: "relative",
    border: "white",
  },

  img: {
    width: "30%",
    height: "auto",
  },

  cardBody: {
    width: "70%",
  },

  col: {
    width: "90%"
  },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#BD0707",
  },

  titleToping: {
    fontSize: "15px",
    color: "#974A4A",
    display: "flex"
  },

  textToping: {
    color: "#974A4A",
    fontWeight: "bold"
  },

  textColor: {
    color: "#BD0707"
  },

  date: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#BD0707",
  },

  price: {
    color: "#974A4A",
  }
};

function CardBill() {
  return (
    <Container className="my-5">
      <Card style={style.card}>
        <Row>
          <Card.Img src={Products} style={style.img} />
          <Card.Body className="p-1" style={style.cardBody}>
            <Col className="m-1" style={style.col}>
              <Card.Title style={style.cardTitle}>
                Ice Coffe Palm Sugar
              </Card.Title>
              <Card.Text className="mb-4" style={style.date}>Saturday, 5 March 2020</Card.Text>
              <Card.Text className="m-0" style={style.titleToping}>
                <p style={style.textToping}>Toping : </p>
                <p style={style.textColor} className="ms-1">Bill Berry Boba, Bubble Tea Gelatin</p>
              </Card.Text>
              <Card.Text style={style.price}>Price : Rp.36.000</Card.Text>
            </Col>
          </Card.Body>
        </Row>
      </Card>
    </Container>
  );
}

export default CardBill;
