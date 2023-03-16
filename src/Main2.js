import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';
import DropdownMenu from './DropdownMenu';

class Main extends React.Component {
  // Method to sort the list of beasts based on the selected criteria
  getSortedBeasts() {
    const sortedBeasts = [...this.props.data];

    // Sort the list of beasts based on the sortBy prop
    switch (this.props.sortBy) {
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

  // Add the filterBeasts method
  // filterBeasts(beasts) {
  //   const searchQuery = this.props.searchQuery.toLowerCase();

  //   return beasts.filter((beast) => {
  //     const titleMatch = beast.title.toLowerCase().includes(searchQuery);
  //     const keywordMatch = beast.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery));

  //     return titleMatch || keywordMatch;
  //   });
  // }

  // Render the Main component
  render() {
    // Get the sorted list of beasts
    const sortedBeasts = this.getSortedBeasts();

    // Filter the list of beasts based on the search query
    // const filteredBeasts = this.filterBeasts(sortedBeasts);


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
            onSelect={this.props.handleSort}
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
            onSelect={this.props.handleSelect}
          />
        </div>
        {/* Render the list of horned beasts */}
        {sortedBeasts
          // .filter((beast) => this.state.selectedHorns === 0 || beast.horns === this.state.selectedHorns)
          .map((beast) => (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              onClick={() => this.props.handleOpenModal(beast)}
            />
          ))}
      </main>
    );
  }
}

export default Main;