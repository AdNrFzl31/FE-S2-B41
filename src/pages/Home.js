import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import CardHome from '../component/CardHome';
import Products from '../component/Product';
// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

const style = {
    text: {
        color: "#BD0707",
    },
}
function Home() {
    return (
        <Container className='my-5 w-90'>
            <CardHome />
            <h3 style={style.text} className="my-5">Let's Order</h3>
            <Products />
        </Container>
    );
}

export default Home;

