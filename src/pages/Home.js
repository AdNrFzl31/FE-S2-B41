import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import Jumbotron from "../component/Jumbotron"
import Products from "../component/Product"
import Navs from "../component/Navbar.js"

// import Income from "./Admin"
// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
  text: {
    color: "#BD0707",
  },
}
function Home() {
  // const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"))

  return (
    <Container className="my-5 w-90">
      <Jumbotron />
      <h3 style={style.text} className="my-5">
        Let's Order
      </h3>
      <Products />
    </Container>
  )
}

export default Home
