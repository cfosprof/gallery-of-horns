import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = ({ title, items, onSelect }) => (
  <Dropdown onSelect={onSelect}>
    <Dropdown.Toggle variant="primary" id="dropdown-basic">
      {title}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {items.map((item, index) => (
        <Dropdown.Item
          key={index}
          eventKey={item.value}
          onClick={(e) => {
            e.preventDefault();
            onSelect(item.value);
          }}
        >
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

// Export the DropdownMenu component
export default DropdownMenu;
