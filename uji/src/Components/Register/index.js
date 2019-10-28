import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";

import RegisterView from "./RegisterComponent";

class RegisterContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, firstname, lastname } = event.target.elements;
    try {
      var user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: (firstname.value).concat(" ", lastname.value)
      });
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <RegisterView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(RegisterContainer);