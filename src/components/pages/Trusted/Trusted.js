import Container from "react-bootstrap/Container";
import Star from "../../../assets/star.svg";
import LWing from "../../../assets/leftWing.svg";
import RWing from "../../../assets/rightWing.svg";
import TrustedCompanines from "../../../assets/techCompanines.svg";
import "./Trusted.css";

function Trusted() {
  return (
    <Container className="TrustedContainer">
      <div>
        <img src={LWing} alt="left wing" className="leftWing wing" />
        <img src={RWing} alt="right wing" className="rightWing wing" />
      </div>
      <div className="stars">
        <img src={Star} alt="star" className="star" />
        <img src={Star} alt="star" className="star" />
        <img src={Star} alt="star" className="star" />
        <img src={Star} alt="star" className="star" />
        <img src={Star} alt="star" className="star" />
      </div>
      <p className="trustedText">Trusted by 5+ high-growth tech companies</p>
      <div>
        <img
          src={TrustedCompanines}
          alt="trusted companies"
          className="trustedCompanies"
        />
      </div>
    </Container>
  );
}

export default Trusted;
