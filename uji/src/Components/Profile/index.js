import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";

import ProfileView from "./ProfileComponent";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProfileView user={this.props.user} />;
  }
}

export default withRouter(ProfileContainer);