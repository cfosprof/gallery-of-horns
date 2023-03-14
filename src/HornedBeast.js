import React from 'react';

class HornedBeast extends React.Component {
  render(){
    const { title, imageUrl, description } = this.props;

    return (
      <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} title={title} />
        <p>{description}</p>
      </article>
    )
  }
}

export default HornedBeast;

