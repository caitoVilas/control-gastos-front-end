
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MainMenu = () => {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home"><i className="fas fa-money-check-alt"></i> Gestion Gastos</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home"><i className="fas fa-home"></i> Inicio</Nav.Link>
          <Nav.Link href="#register"><i className="fas fa-user-plus"></i> Registrarse</Nav.Link>
          <Nav.Link href="#login"><i className="fas fa-sign-in-alt"></i> Ingresar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default MainMenu
