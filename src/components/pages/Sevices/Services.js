import Container from "react-bootstrap/Container";
import MobileAppDevImg from "../../../assets/MobileAppDev.svg";
import WebsiteDevImg from "../../../assets/websiteDev.svg";
import ProductDevImg from "../../../assets/ProductDev.svg";
import "./Services.css";
import { Col, Row } from "react-bootstrap";

function Services() {
  return (
    <Container id="Services">
      <h2 className="ServicesTitle">Our Services</h2>
      <Row className="servicesContainer">
        <Col>
          <img src={MobileAppDevImg} alt="mobile app development" />
          <h3>Mobile App Development</h3>
        </Col>
        <Col>
          <img src={WebsiteDevImg} alt="website development" />
          <h3>Website Development</h3>
        </Col>
        <Col>
          <img src={ProductDevImg} alt="product development" />
          <h3>Product Development</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
