import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";

import PostFormView from "./PostFormComponent";

class PostFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxValue : 0
    }
  }

  handleChange = async event => {
    var newValue = this.state.checkboxValue ? 0: 1;
    this.setState({
      checkboxValue: newValue
    });
  }
  // push post to the database
  handleSubmit = async event => {
    console.log('submitting');
    event.preventDefault();
    // this takes in the post content from the form
    const content = event.target.elements[0];
    const checkbox = event.target.elements[1];

    const itemsRef = firebase.database().ref('posts');
    var displayName = this.props.user.displayName;
    if (checkbox.value == 1) {
      displayName = "Anonymous";
    }
    const post = {
      content: content.value,
      username: displayName,
      userID: this.props.user.uid,
      likes: 0
    }
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }
    console.log(post);
    itemsRef.push(post);

    // closes form after submit is clicked
    /*
      TODO: determine a less hacky way to accomplish this
      comments from before:
          switch back to feed view
          need to pass props from router component
          this.props.history.push('/feed') (gives us an error)
    */
    this.props.handleClose();
  };

  render() {
    return <PostFormView
              onSubmit={this.handleSubmit}
              displayName={this.props.user.displayName}
              userID={this.props.user.uid}
              handleClose = {this.props.handleClose}
              checkboxValue = {this.state.checkboxValue}
              handleChange = {this.handleChange}
              />;
  }
}

export default PostFormContainer;
