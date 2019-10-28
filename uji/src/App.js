// Common UI shared amongst all pages
// Contains header with title, profile button, new post button
import React from 'react';
import profile from './Assets/profile60.png';
import newPost from './Assets/newPost60.png';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Feed from './Components/FeedComponent';
import Register from './Components/Register';
import PostForm from './Components/PostFormComponent';
import PrivateRoute from './PrivateRoute';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase.js'


// TODO: fix SVGIcon.js to properly render icons of correct size to fix image quality issues
// import SVGIcon from "./Assets/SVGIcon.js"
// to use SVGIcon, <SVGIcon name = "profile" width = {60}/>


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false, user: null };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }


  render() {
    const { authenticated, loading } = this.state;
    var user = firebase.auth().currentUser;

    if (loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <div className="Parent">
          <div className="Header">
            <header className="UJI">
              UJI
            </header>
            <h2> User: {user ? user.displayName : null} </h2>
            <div className = "profileButton">
              <img width = "60px" alt="Profile Button" src={profile}/>
            </div>
          </div>
          <div className="frame">
            <Router>
              <Switch>
                <PrivateRoute exact path="/" component={Feed} authenticated={this.state.authenticated}/>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/feed" component={Feed} authenticated={this.state.authenticated}/>
                <Route path="/postform" component={PostForm}/>
                <Route path="/register" component={Register}/>
              </Switch>
            </Router>
          </div>
          <div className="newPostButton">
            <img width = "60px" alt="New Post Button" src={newPost}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
