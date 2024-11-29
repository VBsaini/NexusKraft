import Container from "react-bootstrap/Container";
import "./WhyShould.css";
import FE from "../../../assets/WhyShould/FE.svg";
import AYL from "../../../assets/WhyShould/AYL.svg";
import LBADV from "../../../assets/WhyShould/LBADV.svg";
import DDF from "../../../assets/WhyShould/DDF.svg";
import IHSD from "../../../assets/WhyShould/IHSD.svg";
import CEE from "../../../assets/WhyShould/CEE.svg";
import lWing from "../../../assets/leftWing.svg";
import rWing from "../../../assets/rightWing.svg";
import { Col, Row } from "react-bootstrap";

function WhyShould() {
  return (
    <Container className="WhyShouldContainer">
      <img src={lWing} />
      <img src={rWing} />
      <p className="WhyShouldText">let's summarize....</p>
      <h2 className="WhyShouldTitle">Why should you choose Nexuskraft?</h2>
      <div className="WhyShouldCardContainer">
        <Row>
          <Col className="WhyShouldCard WhyShouldFirstCard">
            <img src={FE} />
            <h3>Flexible Engagement</h3>
            <p>
              You can pause work anytime, and you won’t pay for downtime. Unlike
              traditional setups where you’re charged even when nothing’s
              happening, we make sure you only pay for productive work.
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={AYL} />
            <h3>Amplify Your Launch</h3>
            <p>
              By working with us, you gain access to our 650,000 followers and
              10M+ monthly impressions. We can help you launch #1 on Product
              Hunt. It’s an extra perk that helps your product gain the
              attention it deserves.
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={LBADV} />
            <h3>Led by a design veteran</h3>
            <p>
              Our agency is led by Anagh, who’s taught over 15 designers from
              top brands worldwide. With his expertise guiding every project,
              you get a creative director’s insight on every detail.
            </p>
          </Col>
        </Row>
        <Row className="WhyShould2ndContainer">
          <Col className="WhyShouldCard">
            <img src={DDF} />
            <h3>Dedicated Daily Focus</h3>
            <p>
              Unlike other agencies that might rush through your work in just 1
              hour daily, we dedicate a minimum of 3 hours a day to each
              project, giving your designs the time and attention they deserve.
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={IHSD} />
            <h3>In-House Senior Designers</h3>
            <p>
              Our team is made up of experienced in- house senior designers. We
              don’t cut corners by outsourcing to low-cost freelancers. You get
              top-notch quality from professionals who know their stuff.
            </p>
          </Col>
          <Col className="WhyShouldCard">
            <img src={CEE} />
            <h3>Cost-Efficient Expertise</h3>
            <p>
              Our designers are incredibly efficient—up to 3x faster than less
              experienced freelancers. This means you’re getting premium work at
              a great value, making every dollar you spend worth it.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default WhyShould;
