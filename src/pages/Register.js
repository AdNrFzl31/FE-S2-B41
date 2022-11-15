import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
    textLogin: {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: '36px',
        lineHeight: '49px',
        color: "#BD0707",
    },

    textRed: {
        color: "#BD0707"
    },

    bgColor: {
        backgroundColor: "#BD0707",
    },

    textCenter: {
        textAlign: "center"
    },

    link: {
        fontWeight: "bold",
        textDecoration: "none",
        color: "black"
    }
}

function Register(props) {
    return (
        <Modal {...props}>
            <Modal.Body>
                <Modal.Title style={style.textLogin} >Register</Modal.Title>
                <Form className="w-100 m-auto mt-3 d-grid gap-2">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Button variant="outline-light" style={style.bgColor} type="submit">Register</Button>
                    <Form.Label style={style.textCenter}>Already have an account ? Klik  <Link to onClick={props.onLogin} style={style.link}>Here</Link></Form.Label>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Register;
