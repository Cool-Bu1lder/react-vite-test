import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Header.css";

function Header() {
  return (
    <>
      <header className="p-3 text-bg-dark" data-bs-theme="dark">
        <Container>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* Brand Icon */}
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src="/vite.svg"
                alt="Logo"
                width="40"
                height="32"
                className="me-2"
              />
            </a>

            {/* Nav Links */}
            <Nav
              as="ul"
              className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            >
              <Nav.Item as="li">
                <Nav.Link href="#" className="px-2 text-secondary">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#" className="px-2 text-white">
                  Features
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#" className="px-2 text-white">
                  Pricing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#" className="px-2 text-white">
                  FAQs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#" className="px-2 text-white">
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Search Bar */}
            <Form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <Form.Control
                type="search"
                placeholder="Search..."
                className="form-control-dark text-bg-dark"
                aria-label="Search"
              />
            </Form>

            {/* Auth Buttons */}
            <div className="text-end">
              <Button variant="outline-light" className="me-2">
                Login
              </Button>
              <Button variant="warning">Sign-up</Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
