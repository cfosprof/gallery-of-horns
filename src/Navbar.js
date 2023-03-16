import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import RangeSlider from 'react-bootstrap-range-slider';
// import beasts from './data/data.json';


function NavbarDarkExample(props) {
  // Destructure 'handleSort handleFilter, handleSearch' from the received 'props'
  const { handleSort, handleFilter, handleSearch } = props; 

  // Define the 'handleSortClick' function, which takes 'sortKey' as its argument
  const handleSortClick = (sortKey) => {
    handleSort(sortKey); // Call the 'handleSort' function passed as a prop with the 'sortKey' argument
  };
   // Add a new function for handling filter clicks
   const handleFilterClick = (filterKey) => {
    console.log("Filter key:", filterKey);
    handleFilter(filterKey);
  };




  const handleSearchChange = (e) => {
    handleSearch(e.target.value); // Call the 'handleSearch' function passed as a prop with the input value
  };

  return (
    // 'dark' background color, 'expand' breakpoint set to 'sm'
    //when expand bp is set to large it only displays sort menu when screen is big
    <Navbar variant="dark" bg="dark" expand="sm">
      {/* // Wrap the contents of the 'Navbar' in a 'Container' component */}
      <Container fluid>
        {/* // Create the 'Navbar.Brand' component, acts as a home link */}
        <Navbar.Brand href="#home">Horny Beasts</Navbar.Brand>
        {/* // SHows hamburger menu on small screens */}
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        {/* // Wraps the navigation items */}
        <Navbar.Collapse id="navbar-dark-example">
          {/* // Wrap the 'NavDropdown' component */}
          <Nav>
            {/* // 'NavDropdown' component with Sort title, the id of the menu, and the 'menuVariant' set to 'dark' */}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Sort"
              menuVariant="dark"
            >
              {/* // 'NavDropdown.Item' components for each sorting option */}
              {/* // When an item is clicked, call the 'handleSortClick' function with the corresponding sorting key */}
              <NavDropdown.Item onClick={() => handleSortClick('favorites')}>
                Most Favorites
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSortClick('horns')}>
                Most Horns
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSortClick('alphabetical')}>
                Alphabetical
              </NavDropdown.Item>
            </NavDropdown>
            {/* Add a new NavDropdown for filtering */}
            <NavDropdown
              id="nav-dropdown-dark-example-filter"
              title="Filter by horns"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => handleFilterClick('0')}>
                All
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilterClick('1')}>
                1 Horn
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilterClick('2')}>
                2 Horns
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilterClick('3')}>
                3 Horns
              </NavDropdown.Item>
            </NavDropdown>
             {/* <div className="d-flex align-items-center ms-3">
              <span className="me-2">Filter by horns:</span>
              <RangeSlider
                id="filter-by-horns-slider"
                min={0}
                // max={beasts.length}
                max={20}
                step={1}
                defaultValue={0}
                tooltip="auto"
                tooltipPlacement="top"
                variant="dark"
                onChange={(event) => handleFilterClick(event.target.value)}
              />
          
          // {/* Add the search form */}
          </Nav>
          <Form className="d-flex ms-auto"> 
            <FormControl
              type="search"
              placeholder="Search by title or keyword"
              className="me-2"
              onChange={handleSearchChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;
