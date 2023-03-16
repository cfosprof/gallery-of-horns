import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

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
  filterBeasts(beasts) {
    if (this.props.searchQuery === '') {
      return beasts;
    }
  
    return beasts.filter((beast) => {
      const searchQuery = this.props.searchQuery.toLowerCase();
      return (
        beast.title.toLowerCase().includes(searchQuery) ||
        beast.keyword.toLowerCase().includes(searchQuery)
      );
    });
  }
  
  

  // Render the Main component
  render() {
    // Get the sorted list of beasts
    const sortedBeasts = this.getSortedBeasts();

    // Filter the list of beasts based on the search query
    const filteredBeasts = this.filterBeasts(sortedBeasts);



    return (
      <main>
        {/* Render the list of horned beasts */}
        {filteredBeasts
          .filter((beast) => this.props.selectedHorns === 0 || beast.horns === this.props.selectedHorns)
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
