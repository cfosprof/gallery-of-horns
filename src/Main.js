// Import required modules
import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data/data.json';
import './Main.css';
import DropdownMenu from './DropdownMenu';

// Define the Main component as a class
class Main extends React.Component {
  // Set up the initial state and bind the handlers
  constructor(props) {
    super(props);
    this.state = {
      selectedHorns: 0,
      sortBy: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  // Handler for filtering by the number of horns
  handleSelect(eventKey) {
    this.setState({ selectedHorns: parseInt(eventKey, 10) });
  }

  // Handler for sorting the list of beasts
  handleSort(eventKey) {
    console.log('Sorting by:', eventKey);
    this.setState({ sortBy: eventKey });
  }

  // Sort the list of beasts based on the selected criteria
  getSortedBeasts() {
    const sortedBeasts = [...beasts];

    switch (this.state.sortBy) {
      case 'favorites':
        sortedBeasts.sort((a, b) => b.favorites - a.favorites);
        break;
      case 'horns':
        sortedBeasts.sort((a, b) => b.horns - a.horns);
        break;
      case 'alphabetical':
        sortedBeasts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return sortedBeasts;
  }

  // Render the component
  render() {
    const sortedBeasts = this.getSortedBeasts();

    return (
      <main>
        {/* Render the sort dropdown menu */}
        <div className="dropdown-container">
          <DropdownMenu
            title="Sort by"
            items={[
              { label: 'Most Favorites', value: 'favorites' },
              { label: 'Most Horns', value: 'horns' },
              { label: 'Alphabetical', value: 'alphabetical' },
            ]}
            onSelect={this.handleSort}
          />
        </div>
        {/* Render the filter dropdown menu */}
        <div className="dropdown-container">
          <DropdownMenu
            title="Filter by horns"
            items={[
              { label: 'All', value: '0' },
              { label: '1 Horn', value: '1' },
              { label: '2 Horns', value: '2' },
              { label: '3 Horns', value: '3' },
            ]}
            onSelect={this.handleSelect}
          />
        </div>
        {/* Render the list of horned beasts */}
        {sortedBeasts
          .filter((beast) => this.state.selectedHorns === 0 || beast.horns === this.state.selectedHorns)
          .map((beast) => (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          ))}
      </main>
    );
  }
}

export default Main;
