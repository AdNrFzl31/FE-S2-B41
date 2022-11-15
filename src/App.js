import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Navs from "./component/Navbar.js";
import Navs2 from "./component/Navbar2.js";
import DetailProduct from "./pages/DetailProduct.js";

function App() {
  return (
    <>
      <Navs2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DetailProduct" element={<DetailProduct />} />
        </Routes>
    </>


  );
}

export default App;