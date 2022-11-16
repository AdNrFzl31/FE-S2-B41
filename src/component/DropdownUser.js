import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import User from "../assets/image/User.png";
import Logout from "../assets/image/Logout.png";
import Popover from "react-bootstrap/Popover";
import Profile from "../assets/image/Profil1.png";
import { Col, Nav, Row } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Nav.Link style={{fontWeight:'600', fontSize:'17px',alignItems:'center'}} href="/">
          <img src={User} style={{width:'30px', marginRight:'15px'}} /> Profile
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

const DropdownUser = () => (
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

export default DropdownUser;
