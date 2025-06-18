import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Header.css";

// TODO: make navbar more like bootstrap5 example for responsiveness
function Header() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          {/* Navbar Icon */}
          <Navbar.Brand href="/">
            <img
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Main Nav Routes */}
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-secondary" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="text-white" href="#faqs">
                FAQs
              </Nav.Link>
              <Nav.Link className="text-white" href="#about">
                About
              </Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
              />
            </Form>

            {/* Login and Sign up Buttons */}
            <Navbar.Text>
              <Button variant="outline-light" className="me-2">
                Login
              </Button>
              <Button variant="warning">Signup</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
