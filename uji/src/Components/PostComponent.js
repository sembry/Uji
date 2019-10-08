import React from 'react';
import './PostComponent.css'

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "Post">
        <div className = "userName">
           <p>{props.username}</p>
        </div>
        <div className = "postText">
          <p>{props.postText}</p>
      </div>
    );
  }
}
export default Post;
