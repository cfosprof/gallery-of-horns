// Import required dependencies
import React from 'react';
import './HornedBeast.css';

// Define the HornedBeast class component
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      favorites: 0,
      favorited: false,
    };
    // Bind the handleClick method to the instance
    this.handleClick = this.handleClick.bind(this);
  }

  // Define the handleClick method, which increments the favorites count
  handleClick() {
    this.setState((prevState) => ({
      favorites: prevState.favorites + 1,
      favorited: true,
    }));
  }

  // Define the render method for the component
  render() {
    // Destructure the props to get the title and imageUrl
    const { title, imageUrl } = this.props;
    // Destructure the state to get the favorites count
    const { favorites } = this.state;

    // Return the JSX for the component
    return (
      // Create an article container with a click event handler
      <article className="image-container" onClick={this.handleClick}>
        {/* // Display the image with alt and title attributes */}
        <img src={imageUrl} alt={title} title={title} className="beast-image" />
        {/* // Create an overlay to display the favorites count */}
        <div className="overlay">
          <div className="heart">
            {/* // Display a heart icon and the favorites count */}
            <span role="img" aria-label="heart">
              ❤️
            </span>
            {favorites}
          </div>
        </div>
      </article>
    );
  }
}

// Export the HornedBeast component
export default HornedBeast;
