//Rebuild as a class component

//First imports

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// import HornedBeast from './HornedBeast';

//Create the class, always has a render method

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
