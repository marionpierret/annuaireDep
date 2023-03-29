import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


const NavBar = () => {

    return(
        <div> 
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Annuaire 77</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <LinkContainer exact="true" to="/">
          <Nav.Link href="/">Accueil</Nav.Link>
          </LinkContainer>
          <LinkContainer exact="true" to="/localisation">
          <Nav.Link href="/localisation">Localisation</Nav.Link>
          </LinkContainer>
          <LinkContainer exact="true" to="/contact">
          <Nav.Link href="/contact">Contact</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           </div>
    )
}

export default NavBar