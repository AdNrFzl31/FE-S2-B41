import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AddProduct from "../assets/image/AddProduct.png";
import AddToping from "../assets/image/AddToping.png";
import Logout from "../assets/image/Logout.png";
import Popover from "react-bootstrap/Popover";
import Profile from "../assets/image/Profil1.png";
import { Col, Nav, Row } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Nav.Link className="mt-2" style={{fontWeight:'600', fontSize:'17px',alignItems:'center'}} href="/">
          <img src={AddProduct} style={{width:'30px', marginRight:'15px'}} /> Add Product
      </Nav.Link>
      <Nav.Link className="mt-4" style={{fontWeight:'600', fontSize:'17px',alignItems:'center'}} href="/">
          <img src={AddToping} style={{width:'30px', marginRight:'15px'}} /> Add Toping
      </Nav.Link>
    </Popover.Body>
    <hr />
    <Popover.Body>
      <Nav.Link style={{fontWeight:'600', fontSize:'17px',alignItems:'center'}} href="/">
          <img src={Logout} style={{width:'30px', marginRight:'15px'}} /> Logout
      </Nav.Link>
    </Popover.Body>
  </Popover>
);

const DropdownAdmin = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <img
      alt=""
      src={Profile}
      // width="50p"
      // height="50"
      className="d-inline-block align-top btn "
    />
  </OverlayTrigger>
);

export default DropdownAdmin;
