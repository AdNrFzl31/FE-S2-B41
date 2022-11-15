import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row } from 'react-bootstrap';
import Logo from "../assets/image/Logo2.png";
import Product from "../assets/image/Product1.png";
import Product2 from "../assets/image/Product2.png";
import Product3 from "../assets/image/Product3.png";
import Product4 from "../assets/image/Product4.png";
import { Link } from "react-router-dom";



// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
    card: {
        width: "16rem",
        backgroundColor: "#F6DADA",
        padding: "0"
    },

    title: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#BD0707",
    },

    price: {
        color: "#974A4A",
        fontSize: "14px",
    },

    ImgProduct: {
        position: "relative",
        width: "100%"
    },

    // Image Product 1
    ImgLogo: {
        position: "absolute",
        width: "90px",
        height: "auto",
        top: "27%",
        left: "33%",
    },

    // Image Product 2
    ImgLogo2: {
        position: "absolute",
        width: "90px",
        height: "auto",
        top: "27%",
        left: "34%",
    },

    // Image Product 3
    ImgLogo3: {
        position: "absolute",
        width: "90px",
        height: "auto",
        top: "27%",
        left: "34%",
    },

    // Image Product 4
    ImgLogo4: {
        position: "absolute",
        width: "90px",
        height: "auto",
        top: "38%",
        left: "36%",
    },

}
function Products() {
    return (
        <Row className='gap-4 justify-content-center'>
            {/* Product 1 */}
            <Card border="light" style={style.card}>
                <Link to="/DetailProduct">
                    <Card.Img variant="top" src={Product} style={style.ImgProduct} />
                    <Card.Img src={Logo} style={style.ImgLogo} />
                </Link>
                <Card.Body>
                    <Card.Title style={style.title}>Ice Coffee Palm Sugar</Card.Title>
                    <Card.Text style={style.price}>
                        Rp.27.000
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Product 2 */}
            <Card border="light" style={style.card}>
                <Card.Img variant="top" src={Product2} style={style.ImgProduct} />
                <Card.Img src={Logo} style={style.ImgLogo2} />
                <Card.Body>
                    <Card.Title style={style.title}>Ice Coffee Green Tea</Card.Title>
                    <Card.Text style={style.price}>
                        Rp.31.000
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Product 3 */}
            <Card border="light" style={style.card}>
                <Card.Img variant="top" src={Product3} style={style.ImgProduct} />
                <Card.Img src={Logo} style={style.ImgLogo3} />
                <Card.Body>
                    <Card.Title style={style.title}>Hanami Latte</Card.Title>
                    <Card.Text style={style.price}>
                        Rp.29.000
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Product 4 */}
            <Card border="light" style={style.card}>
                <Card.Img variant="top" src={Product4} style={style.ImgProduct} />
                <Card.Img src={Logo} style={style.ImgLogo4} />
                <Card.Body>
                    <Card.Title style={style.title}>Clepon Coffee</Card.Title>
                    <Card.Text style={style.price}>
                        Rp.28.000
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default Products;

