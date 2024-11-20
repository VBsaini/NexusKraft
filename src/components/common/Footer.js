import Container from "react-bootstrap/Container";
import background from "../../assets/FooterBack.svg";
import "./Footer.css";

function BrandExample() {
  return (
    <>
      <Container fluid className="footerContainer">
        <div className="footerContentContainer">
          <p>Let's create something</p>
          <p className="Fblue">amazing together</p>
          <div className="footerMailContainer">
            <input placeholder="Enter Email" /> <button>Get Back to me</button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BrandExample;
