// Import required components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Define the NavbarDarkExample functional component
function NavbarDarkExample() {
  return (
    // Create a dark-themed Navbar component
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        {/* // Set the Navbar brand (logo/title) with a link */}
        <Navbar.Brand href="#home">Horny Beasts</Navbar.Brand>
        {/* // Add a toggle button for collapsing the Navbar on small screens */}
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        {/* // Create a collapsible section for the Navbar content */}
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            {/* // Add a dropdown menu for sorting options */}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Sort"
              menuVariant="dark"
            >
              {/* // Add individual dropdown items with links for each sorting option */}
              <NavDropdown.Item href="#action/3.1">Most Favorites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Most Horns</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alphabetical</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//Export the NavbarDarkExample component
export default NavbarDarkExample;
