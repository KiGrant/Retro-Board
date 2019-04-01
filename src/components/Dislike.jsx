import React, { Component } from 'react';


class Dislike extends Component {
  state = {
    Dislike: 0
  };
  Dislike = () => this.setState({ Dislike: this.state.Dislike + 1 })

  render() {
    return (
    
      <button className="DislikeButton" onClick={this.Dislike}>
           {this.state.Dislike}Dislike
        </button>
     
    );
  }
}

export default Dislike;