import React from 'react';
import './PostComponent.css'

class Post extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <BodyBackgroundColor backgroundColor= "#F5F4FF">
        <div className = "Post">
          <div className = "username">
             <p>{this.props.username}</p>
          </div>
          <div className = "postText">
            <p>{this.props.postText}</p>
          </div>
        </div>
      </BodyBackgroundColor>
    );
  }
}
export default Post;
