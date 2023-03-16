import NavbarDarkExample from './Navbar';

function Header(props) {
  const { handleSort, handleFilter, handleSearch } = props;

  return (
    <header>
      <NavbarDarkExample
        handleSort={handleSort}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default Header;
