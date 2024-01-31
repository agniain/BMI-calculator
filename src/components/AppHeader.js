import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">BMI CALCULATOR</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/media" className="nav-link" activeClassName="active">Media</NavLink>
            <NavDropdown title="Contacts" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#">Email</NavDropdown.Item>
              <NavDropdown.Item href="#">Instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
