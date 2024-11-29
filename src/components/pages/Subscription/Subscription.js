import Container from "react-bootstrap/Container";
import "./Subscription.css";
import experienceImg from "../../../assets/Subscription/8nVaH4lWJn1nAHB5vQrkIpXJO4.svg.svg";
import rateImg from "../../../assets/Subscription/NqSHBh5t5D8Xkq8HFRnTl6JFno.svg fill.svg";
import moneyImg from "../../../assets/Subscription/RNhr6flbxqXVrRYnCPeaFyIMQ.png.svg";
import fastImg from "../../../assets/Subscription/SxqfkMylcm9K3FzqBAvinvVa8.svg.svg";
import stonksImg from "../../../assets/Subscription/oJgj4EBwk9YL7NJ2mOry7LVfwDo.svg.svg";
import savingImg from "../../../assets/Subscription/tnGsq9fA1pTOrfITaTQ9aApciw.svg.svg";
import { Col, Row } from "react-bootstrap";

function Subscription() {
  return (
    <Container className="subscriptionContainer">
      <h2 className="SubscriptionTitle">
        Subscription agencies letting you down?
      </h2>
      <p className="SubscriptionText">
        get the attention your startup/business deserves
      </p>
      <div className="subscriptionCardContainer">
        <Row>
          <Col className="subscriptionCard subscriptionFirstCard">
            <img src={rateImg} />
            <h3>
              <span className="bigText">4.95</span>
            </h3>
            <p>average app rating our design get based on 6,500+ reviews</p>
          </Col>
          <Col className="subscriptionCard">
            <img src={fastImg} />
            <h3>
              <span className="bigText">3x</span> faster
            </h3>
            <p>
              turnarounds with large-sized projects taking 8-12 weeks on avg.
            </p>
          </Col>
          <Col className="subscriptionCard">
            <img src={savingImg} />
            <h3>
              <span className="bigText">$50,000</span>
            </h3>
            <p>
              annual savings compared to hiring a senior in-house product
              designer.
            </p>
          </Col>
        </Row>
        <Row className="subscription2ndContainer">
          <Col className="subscriptionCard">
            <img src={experienceImg} />
            <h3>
              <span className="bigText">30+</span> years
            </h3>
            <p>
              of combined experience in product design, motion, and no-code.
            </p>
          </Col>
          <Col className="subscriptionCard">
            <img src={stonksImg} />
            <h3>
              <span className="bigText">$100</span>M+
            </h3>
            <p>
              raised for pre-seed → series C startups thanks to our designs.
            </p>
          </Col>
          <Col className="subscriptionCard">
            <img src={moneyImg} />
            <h3>
              <span className="bigText">$6k</span>/mo
            </h3>
            <p>
              for an immediate access to a team of specialized senior designers
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Subscription;
