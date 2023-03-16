// Import required dependencies
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Define the DropdownMenu functional component
const DropdownMenu = ({ title, items, onSelect }) => (
  // Create a Dropdown component with an onSelect handler
  <Dropdown onSelect={onSelect}>
    {/* // Create a Toggle button with the provided title */}
    <Dropdown.Toggle variant="primary" id="dropdown-basic">
      {title}
    </Dropdown.Toggle>
    {/* // Create the Dropdown menu */}
    <Dropdown.Menu>
      {/* // Map over the items array to create individual Dropdown items */}
      {items.map((item, index) => (
        <Dropdown.Item
          key={index}
          eventKey={item.value}
          // Add an onClick handler to prevent the default behavior and call onSelect with the item value
          onClick={(e) => {
            e.preventDefault();
            onSelect(item.value);
          }}
        >
          {/* // Display the label of the item */}
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

// Export the DropdownMenu component
export default DropdownMenu;
