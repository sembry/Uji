import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";

import PostFormView from "./PostFormComponent";

class PostFormContainer extends Component {

  // push post to the database
  handleSubmit = async event => {
    console.log('submitting');
    event.preventDefault();
    // this takes in the post content from the form
    const { content } = event.target.elements;
    const itemsRef = firebase.database().ref('posts');
    const post = {
      content: content,
      uid: this.props.user.uid,
      username: this.props.user.displayName,
      likes: 0
    }
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }
    itemsRef.push(post);
    // switch back to feed view
    this.props.history.push('/login')
  };

  render() {
    console.log("test1");
    return <PostFormView 
              onSubmit={this.handleSubmit}
              displayName={this.props.user.displayName} 
              handleClose = {this.props.handleClose} 
              />;
  }
}

export default PostFormContainer;