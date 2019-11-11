import React from 'react';
import firebase from '../firebase.js';
import './LandingComponent.css';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login';
import Register from './Register';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(url) {
    this.props.history.push(url);
  }

  render() {

    return (
    <div>
    <div class="hero-image">
      <div class="hero-text">
        <h1>Welcome to UJI!</h1>
        <p>UJI is an empowering community for women
        where they can share their accomplishments and become more confident
        through daily affirmations.</p>
        <button class="login" onClick={() => this.handleClick("/login")}>Login</button>
        <button class="register" onClick={() => this.handleClick("/register")}>Register</button>
      </div>
    </div>
    <p> Photo by Priscilla Du Preez on Unsplash </p>
      </div>
    );
  }
}
export default withRouter(Landing);
