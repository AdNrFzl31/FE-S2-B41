import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavsAdmin from "./component/NavbarAdmin.js";
import NavsUser from "./component/NavbarUser.js";
import DetailProduct from "./pages/DetailProduct.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import MyProfil from "./pages/MyProfil.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <>
      <NavsAdmin />
      {/* <MyProfil /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DetailProduct" element={<DetailProduct />} />
          <Route path="/MyProfil" element={<MyProfil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
