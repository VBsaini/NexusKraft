import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import navIcon from "../../assets/NavIcon.svg";
import "./Navbar.css";

import homeNavIcon from "../../assets/navHome.svg";
import servicesNavIcon from "../../assets/navServices.svg";
import workNavIcon from "../../assets/navWork.svg";
import contactNavIcon from "../../assets/navContact.svg";
import aboutNavIcon from "../../assets/navAbout.svg";

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
              <Nav.Link className="navbarLink" href="#/">
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
                className="navbarLink"
                onClick={(e) => {
                  if (window.location.href.split("#")[1] == "/about") {
                    window.location.href = "/#/#work";
                  } else {
                    document
                      .getElementById("Work")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src={workNavIcon}
                  width="15"
                  height="15"
                  className="d-inline-block align-center me-2"
                  alt="React Bootstrap logo"
                />
                Our Work
              </Nav.Link>
              <Nav.Link className="navbarLink" href="#/about">
                <img
                  src={aboutNavIcon}
                  width="15"
                  height="15"
                  className="d-inline-block align-center me-2"
                  alt="React Bootstrap logo"
                />
                About
              </Nav.Link>
              <Nav.Link
                className="navbarLink"
                onClick={(e) => {
                  if (window.location.href.split("#")[1] == "/about") {
                    window.location.href = "/#/#services";
                  } else {
                    document
                      .getElementById("Services")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
                // window.location.href.split("#")[1] == "/about"
              >
                <img
                  src={servicesNavIcon}
                  width="15"
                  height="15"
                  className="d-inline-block align-center me-2"
                  alt="React Bootstrap logo"
                />
                Our Services
              </Nav.Link>
              <Nav.Link
                className="navbarLink"
                onClick={(e) => {
                  if (window.location.href.split("#")[1] == "/about") {
                    window.location.href = "/#/#contact";
                  } else {
                    document
                      .getElementById("Contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src={contactNavIcon}
                  width="15"
                  height="15"
                  className="d-inline-block align-center me-2"
                  alt="React Bootstrap logo"
                />
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
