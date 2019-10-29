import React from 'react';
import './PostComponent.css'
import firebase from '../firebase.js';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.updateLike = this.updateLike.bind(this);
  }

  updateLike = (e) => {
    console.log("clicked button");
    firebase.database().ref().child('/posts/' + this.props.postId)
        .update({likes: this.props.likes +1});
    this.props.history.push("/feed");
  }

  render() {
    return (
      <div className = "Post">
        <div className = "userName">
<<<<<<< HEAD
           <p>{this.props.username}</p>
        </div>
        <div className = "postText">
          <p>{this.props.postText}</p>
        </div>
=======
          <strong>{this.props.userName}</strong>
        </div>
        <div className = "postText">
           <p>{this.props.postText}</p>
         </div>
         <strong>{this.props.likes}</strong>
         <button type="button"
          onClick={this.updateLike}>
            Like
          </button>
>>>>>>> 005c13ece83651c39e513e2acf04203383d1594b
      </div>
    );
  }
}
export default withRouter(Post);
