import Frame from "../../../assets/trusted.svg";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "./HeroSection.css";
import { Button } from "react-bootstrap";

function HeroSection() {
  return (
    <Container className="FrameImgContainer">
      <Stack gap={3} className="HeroStack">
        <h1>
          We are a <span className="design">design</span> patners for startups
          and agencies
        </h1>
        <h4>
          Get on-demand access to a team of senior-level designers and
          developers for the cost of a freelancer.
        </h4>
        <div>
          <Button>See our work</Button>
        </div>
        <div>
          <p className="trusted">Trusted by</p>
          <img src={Frame} />
        </div>
      </Stack>
      {/* <img src={Frame} className="FrameImg" /> */}
    </Container>
  );
}

export default HeroSection;
