import Frame from "../../../assets/Frame 95.svg";
import Container from "react-bootstrap/Container";
import "./HomeImages.css";

function HomeImage() {
  return (
    // <Container fluid className="FrameImgContainer">
    <img src={Frame} className="FrameImg" />
    // </Container>
  );
}

export default HomeImage;
