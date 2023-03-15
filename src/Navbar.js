import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Horny Beasts</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Sort"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Most Favorites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Most Horns
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alphabetical</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;