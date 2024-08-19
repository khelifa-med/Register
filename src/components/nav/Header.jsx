
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './nav.css'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Link to={'/'}><Navbar.Brand >MyWebsite</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navContainer">
            <Link to={'/'}><Nav.Link href="#home">Home</Nav.Link></Link>
          </Nav>
          <div className="nav-buttons">
            <Link to={'/signUp'}> <Button variant="outline-primary" className="me-2">Sign Up</Button></Link>
            <Link to={'/login'}><Button variant="primary">Login</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}
