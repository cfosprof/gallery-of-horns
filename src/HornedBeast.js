import React from 'react';

class HornedBeast extends React.Component {
  render(){
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;

