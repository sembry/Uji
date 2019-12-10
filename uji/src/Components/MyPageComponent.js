import React from 'react';
import firebase from '../firebase.js';
import './MyPageComponent.css';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Affirmations from './Affirmations/AffirmationsComponent';
import Compliments from './Compliments/ComplimentsComponent';

class MyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "personalPage">
        <Affirmations user={this.props.user}></Affirmations>
        <Compliments user={this.props.user}></Compliments>
      </div>
    );
  }
}
export default withRouter(MyPage);
