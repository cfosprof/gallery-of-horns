import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data/data.json';
import './Main.css';
import Dropdown from 'react-bootstrap/Dropdown';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHorns: 0,
      sortBy: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({ selectedHorns: parseInt(eventKey, 10) });
  }
  handleSort(sortBy) {
    this.setState({ sortBy });
  }

  render() {
    return (
      <main>
        <div className="dropdown-container">
            <Dropdown onSelect={this.handleSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Filter by horns
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="0">All</Dropdown.Item>
              <Dropdown.Item eventKey="1">1 Horn</Dropdown.Item>
              <Dropdown.Item eventKey="2">2 Horns</Dropdown.Item>
              <Dropdown.Item eventKey="3">3 Horns</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {beasts
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
