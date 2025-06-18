import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Navbar Icon */}
        <Navbar.Brand href="#home">
          <img
            src="/vite.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Main Nav Routes */}
          <Nav className="me-auto">
            <Nav.Link className="text-secondary" href="#home">
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
  );
}

export default Header;
