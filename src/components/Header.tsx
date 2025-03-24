import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/simple-image-filter.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Simple Image Filter Logo"
          />
          Simple Image Filter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">首页</Nav.Link>
            <Nav.Link as={Link} to="/features">功能特点</Nav.Link>
            <Nav.Link as={Link} to="/download">下载</Nav.Link>
            <Nav.Link as={Link} to="/docs">文档</Nav.Link>
            <Nav.Link href="https://github.com/dependon/simple-image-filter" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
