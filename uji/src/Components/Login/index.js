import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";

import LoginView from "./LoginComponent";

class LoginContainer extends Component {
  // Use firebase's API to sign in
  handleSignIn = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignIn} />;
  }
}

export default withRouter(LoginContainer);
