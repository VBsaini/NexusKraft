import Container from "react-bootstrap/Container";
import "./WhyShould.css";
import experienceImg from "../../../assets/Subscription/8nVaH4lWJn1nAHB5vQrkIpXJO4.svg.svg";
import rateImg from "../../../assets/Subscription/NqSHBh5t5D8Xkq8HFRnTl6JFno.svg fill.svg";
import moneyImg from "../../../assets/Subscription/RNhr6flbxqXVrRYnCPeaFyIMQ.png.svg";
import fastImg from "../../../assets/Subscription/SxqfkMylcm9K3FzqBAvinvVa8.svg.svg";
import stonksImg from "../../../assets/Subscription/oJgj4EBwk9YL7NJ2mOry7LVfwDo.svg.svg";
import savingImg from "../../../assets/Subscription/tnGsq9fA1pTOrfITaTQ9aApciw.svg.svg";
import lWing from "../../../assets/leftWing.svg";
import rWing from "../../../assets/rightWing.svg";
import { Col, Row } from "react-bootstrap";

function WhyShould() {
  return (
    <Container className="WhyShouldContainer">
      <img src={lWing} />
      <img src={rWing} />
      <p className="WhyShouldText">let's summarize....</p>
      <h2 className="WhyShouldTitle">
        Subscription agencies letting you down?
      </h2>
      <div className="WhyShouldCardContainer">
        <Row>
          <Col className="WhyShouldCard WhyShouldFirstCard">
            <img src={rateImg} />
            <h3>
              <span className="bigText">4.95</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              erat eget mauris rutrum congue. Curabitur et velit dui. Vestibulum
              et urna nulla. Mauris condimentum sem
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={fastImg} />
            <h3>
              <span className="bigText">3x</span> faster
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              erat eget mauris rutrum congue. Curabitur et velit dui. Vestibulum
              et urna nulla. Mauris condimentum sem
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={savingImg} />
            <h3>
              <span className="bigText">$50,000</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              erat eget mauris rutrum congue. Curabitur et velit dui. Vestibulum
              et urna nulla. Mauris condimentum sem
            </p>
          </Col>
        </Row>
        <Row className="WhyShould2ndContainer">
          <Col className="WhyShouldCard">
            <img src={experienceImg} />
            <h3>
              <span className="bigText">30+</span> years
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              erat eget mauris rutrum congue. Curabitur et velit dui. Vestibulum
              et urna nulla. Mauris condimentum sem
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={stonksImg} />
            <h3>
              <span className="bigText">$100</span>M+
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              erat eget mauris rutrum congue. Curabitur et velit dui. Vestibulum
              et urna nulla. Mauris condimentum sem
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={moneyImg} />
            <h3>
              <span className="bigText">$6k</span>/mo
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              erat eget mauris rutrum congue. Curabitur et velit dui. Vestibulum
              et urna nulla. Mauris condimentum sem
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default WhyShould;
