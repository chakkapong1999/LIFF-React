import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ paddingLeft: 20 }}>
        <Navbar.Brand as={Link} to="/">
          LIFF
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/">
            <BsGear />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
