import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      favorited: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      favorites: prevState.favorites + 1,
      favorited: true,
    }));
  }

  render() {
    const { title, imageUrl } = this.props;
    const { favorites } = this.state;

    return (
      <article className="image-container" onClick={this.handleClick}>
        <img src={imageUrl} alt={title} title={title} className="beast-image" />
        <div className="overlay">
          <div className="heart">
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

export default HornedBeast;
