import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" >Phone Shop</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Product</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </nav>
    );
};

export default Header;