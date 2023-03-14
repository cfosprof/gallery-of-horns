import React from 'react';
import Header from './Header'
import HornedBeast from './HornedBeast';
import beasts from './data/data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header title="Beasts" />
        {beasts.map(beast => (
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

