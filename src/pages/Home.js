import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import CardHome from "../component/CardHome"
import Products from "../component/Product"
import Income from "./Admin"
// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
  text: {
    color: "#BD0707",
  },
}
function Home() {
  const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"))

  if (DataUser === null) {
    return (
      <Container className="my-5 w-90">
        <CardHome />
        <h3 style={style.text} className="my-5">
          Let's Order
        </h3>
        <Products />
      </Container>
    )
  } else {
    return DataUser[0].role === "admin" ? (
      <Income />
    ) : (
      <Container className="my-5 w-90">
        <CardHome />
        <h3 style={style.text} className="my-5">
          Let's Order
        </h3>
        <Products />
      </Container>
    )
  }
}

export default Home
