import React from 'react';
import './PostComponent.css'

class Post extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className = "Post">
        <div className = "username">
           <p>{this.props.username}</p>
        </div>
        <div className = "postText">
          <p>{this.props.postText}</p>
        </div>
      </div>
    );
  }
}
export default Post;
