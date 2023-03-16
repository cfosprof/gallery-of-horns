import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import beasts from './data/data.json';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state and bind event handlers
    this.state = {
      selectedHorns: 0,
      sortBy: null,
      showModal: false,
      selectedBeast: null,
      searchQuery: '', 
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // HandleSearch event handler
  handleSearch(query) {
    this.setState({ searchQuery: query });
  }

  // Handler for filtering by the number of horns
  handleSelect(eventKey) {
    console.log("Event key:", eventKey);
    this.setState({ selectedHorns: parseInt(eventKey, 10) }, () => {
      console.log("Selected Horns:", this.state.selectedHorns);
    });
  }

  //TODO still need to fix this, and the issue with it not displaying unless the window is more than half full
  // Handler for sorting the list of beasts
  handleSort(eventKey) {
    console.log('Sorting by:', eventKey);
    this.setState({ sortBy: eventKey });
  }

  // Handler for opening the modal
  handleOpenModal(beast) {
    this.setState({ showModal: true, selectedBeast: beast });
  }

  // Handler for closing the modal
  handleCloseModal() {
    this.setState({ showModal: false, selectedBeast: null });
  }



  // Render the App component
  render() {
    return (
      // Use a React fragment to render multiple elements without a parent container
      <>
        <Header
        handleSort={this.handleSort}
        handleFilter={this.handleSelect}
        handleSearch={this.handleSearch}
        />
          <Main
            sortBy={this.state.sortBy}
            searchQuery={this.state.searchQuery}
            selectedHorns={this.state.selectedHorns}
            handleSort={this.handleSort}
            handleOpenModal={this.handleOpenModal}
            data={beasts}
          />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          beast={this.state.selectedBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
