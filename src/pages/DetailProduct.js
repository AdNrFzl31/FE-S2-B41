import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Button} from 'react-bootstrap';
import Product from "../assets/image/Product1.png";

// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
    card: {
        width: "90%",
        height: "400px",
        position: "relative"
    },

    img: {
        width: "250px",
        height: "auto",
        position: "absolute"
    },

    cardBody: {
        width: "50%"
    },

    cardTitle: {
        fontFamily: "Freight",
        fontStyle: "Sans Black SC",
        fontSize: "60px",
        lineHeight: "100%",
        align: "Left",
        verticalAlign: "Top",
        color: "white"
    },

    cardText: {
        color: "white"
    },
}
function DetailProduct() {
    return ( 
        <Container className='my-5 w-90'>
            <Card style={style.card}>
                <Card.Img style={style.img} src={Product} />
                <Card.Body className='m-5' style={style.cardBody}>
                    <Card.Title style={style.cardTitle}>Card Title</Card.Title>
                    <Card.Text style={style.cardText}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DetailProduct