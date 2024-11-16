import Container from "react-bootstrap/Container";
import "./Schdule.css";
import { Col, Row } from "react-bootstrap";

function Schdule() {
  return (
    <Container className="SchduleContainer">
      <h1 className="SchduleTitle">Schedule a Consultation</h1>
      <p className="SchduleSubtitle">
        We are here to help you with your project. Schedule a consultation with
        us to get started.
      </p>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Schdule;
