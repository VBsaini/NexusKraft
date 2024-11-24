import Container from "react-bootstrap/Container";
import MobileAppDevImg from "../../../assets/MobileAppDev.svg";
import "./Services.css";
import { Col, Row } from "react-bootstrap";

function Services() {
  return (
    <Container id="Services">
      <h2 className="ServicesTitle">Our Services</h2>
      <Row className="servicesContainer">
        <Col>
          <img src={MobileAppDevImg} alt="service" />
          <h3>Mobile App Development</h3>
        </Col>
        <Col>
          <img src={MobileAppDevImg} alt="service" />
          <h3>Mobile App Development</h3>
        </Col>
        <Col>
          <img src={MobileAppDevImg} alt="service" />
          <h3>Mobile App Development</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
