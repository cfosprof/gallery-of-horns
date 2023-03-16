import React from 'react';
import './HornedBeast.css';
import './data/data.json';

class HornedBeast extends React.Component {
  // Set up the initial state and bind event handlers in the constructor
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      favorited: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  // Event handler for when the heart is clicked
  handleClick(event) {
    event.stopPropagation(); // Prevent the event from propagating to parent elements (prevents modal from opening)
    
    //TODO: MAke it to where clicked heart is locked once a user has favorited it so they can't count it multiple times.
    this.setState((prevState) => ({ // 
      favorites: prevState.favorites + 1, 
      favorited: true, 
    }));
  }

  // Event handler for when the actual image is clicked
  handleImageClick() {
    this.props.onClick(); 
  }

  render() {
    // Destructure the props to get the title and imageUrl
    const { title, imageUrl } = this.props;
    // Destructure the state to get the favorites count
    const { favorites } = this.state;

    // Return the JSX for the component
    return (
      // Create an article container with a click event handler for the image
      <article className="image-container" onClick={this.handleImageClick}>
        {/* // Display the image with alt and title attributes */}
        <img src={imageUrl} alt={title} title={title} className="beast-image" />
        {/* // Create an overlay div to display the favorites count and heart */}
        <div className="overlay">
          {/* // Create a div to contain the heart and favorites count */}
          <div className="heart">
            {/* // Display a heart icon and set the onClick event to the handleClick function */}
            <span
              role="img"
              aria-label="heart"
              onClick={this.handleClick}
            >
              ❤️
            </span>
            {/* // Display the favorites count */}
            {favorites}
          </div>
        </div>
      </article>
    );
  }
}

export default HornedBeast;
