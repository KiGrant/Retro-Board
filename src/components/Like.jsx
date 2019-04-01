import React, { Component } from 'react';



class Likes extends Component {
  state = {
    likes: 0
  };
  like = () => this.setState({ likes: this.state.likes + 1 })

  render() {
    return (
    
      <button className="LikeButton" onClick={this.like}>
           {this.state.likes}Like
        </button>
     
    );
  }
}

export default Likes;