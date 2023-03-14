import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render(){
    return (

      <>
        <h2>Horned Beasts</h2>
        
        <HornedBeast title="beast1" description = "yeet" image_url="/"/>
        <HornedBeast title="beast2" description = "woot" image_url="/"/>

        {/* <HornedBeast title="" description="" image_url="" */}
      </>
    )
  }
}

export default Main;

