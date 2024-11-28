import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import navIcon from "../../assets/NavIcon.svg";
import "./Navbar.css";

import homeNavIcon from "../../assets/nav icon.svg";
// import navIcon from "../../assets/NavIcon.svg";
// import navIcon from "../../assets/NavIcon.svg";
// import navIcon from "../../assets/NavIcon.svg";

function BrandExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={navIcon}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="#/">
                <img
                  src={homeNavIcon}
                  width="15"
                  height="15"
                  className="d-inline-block align-center me-2"
                  alt="React Bootstrap logo"
                />
                Home
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  document
                    .getElementById("Work")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Our Work
              </Nav.Link>
              <Nav.Link href="#/about">About</Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  if (window.location.href.split("#")[1] == "/about") {
                    window.location.href = "#/";
                  }
                  // window.location.href.split("#")[1] == "/about"
                  document
                    .getElementById("Services")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Our Services
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  document
                    .getElementById("Contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button variant="success" className="NavbarGITBtn">
              Get In Touch
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
