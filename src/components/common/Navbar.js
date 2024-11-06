import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import navIcon from "../../assets/NavIcon.svg";

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
              <Nav.Link href="#home">
                <img
                  src={homeNavIcon}
                  width="15"
                  height="15"
                  className="d-inline-block align-center me-2"
                  alt="React Bootstrap logo"
                />
                Home
              </Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav>
            <Button variant="success">Get In Touch</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
