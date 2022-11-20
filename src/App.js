import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navs from "./component/Navbar.js"
import Transaction from "./component/Transaction.js"
import AddProduct from "./pages/AddProduct.js"
import AddToping from "./pages/AddToping.js"
import Income from "./pages/Admin.js"
import Cart from "./pages/Cart.js"
import DetailProduct from "./pages/DetailProduct.js"
import Home from "./pages/Home.js"
import Profile from "./pages/Profile.js"

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/AddToping" element={<AddToping />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
