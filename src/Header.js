import React from 'react';
import NavbarDarkExample from './Navbar.js';

class Header extends React.Component {
  render(){
    return (
      <header>
        <NavbarDarkExample handleSort={this.props.handleSort}
        handleSearch={this.props.handleSearch} />
      </header>
    )
  }
}

export default Header;
