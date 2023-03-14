import React from 'react';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0,
      favorited: false,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => ({
      favorites: prevState.favorites + 1,
      favorited: true,
    }));
  }

  render(){
    const { title, imageUrl, description } = this.props;
    const { favorites } = this.state;

    return (
      <article>
        <h2>{title}</h2>
        <img
          src={imageUrl}
          alt={title}
          title={title}
          onClick={this.handleClick}
        />
        <p>{description}</p>
        <p>
          <span role="img" aria-label = "heart">❤️</span>
          {favorites}
        </p>
      </article>
    )
  }
}

export default HornedBeast;

