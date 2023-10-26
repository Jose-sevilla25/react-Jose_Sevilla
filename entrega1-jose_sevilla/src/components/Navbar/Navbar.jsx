import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from '../CarWidget/CarWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Astro Rave</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hombres</Nav.Link>
            <Nav.Link href="#home">Mujeres</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CarWidget/>
    </Navbar>
  );
}

export default NavBar;