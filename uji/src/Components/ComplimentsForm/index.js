import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";

import ComplimentsFormView from "./ComplimentsFormComponent";

class ComplimentsFormContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  // push post to the database
  handleSubmit = async event => {
    event.preventDefault();
    // this takes in the post content from the form
    const content = event.target.elements[0];

    const itemsRef = firebase.database().ref('compliments');

    const compliment = {
      content: content.value,
    }
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }

    itemsRef.child(this.props.user.uid).push(compliment);
    this.props.handleClose();

  };

  render() {
    return <ComplimentsFormView
              onSubmit={this.handleSubmit}
              handleClose={this.props.handleClose}
              complimentReceiver={this.props.postUserName}
              />;
  }
}

export default ComplimentsFormContainer;
