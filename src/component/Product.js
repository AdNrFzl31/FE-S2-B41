import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const style = {
  card: {
    width: "16rem",
    backgroundColor: "#F6DADA",
    padding: "0",
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
    width: "100%",
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
  const DataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))

  return (
    <Row className="d-flex gap-4 justify-content-center">
      {DataProduct.map((product) => (
        <Product
          id={product.id}
          name={product.nameProduct}
          order={product.imgProduct}
          price={product.price}
        />
      ))}
    </Row>
  )
}

function Product(props) {
  const navigate = useNavigate()
  return (
    <>
      <Card
        border="light"
        style={style.card}
        onClick={() => {
          navigate(`/DetailProduct/${props.id}`)
        }}
      >
        <Card.Img variant="top" src={props.order} style={style.ImgProduct} />
        <Card.Body>
          <Card.Title style={style.title}>{props.name}</Card.Title>
          <Card.Text style={style.price}>IDR {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Products
