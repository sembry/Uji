// Common UI shared amongst all pages
// Contains header with title, profile button, new post button
import React from 'react';
import profile from './Assets/profile60.png';
import newPost from './Assets/newPost60.png';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Login from './Components/LoginComponent';
import Feed from './Components/FeedComponent';
import Register from './Components/RegisterComponent';
import PostForm from './Components/PostFormComponent';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase.js'
// TODO: fix SVGIcon.js to properly render icons of correct size to fix image quality issues
// import SVGIcon from "./Assets/SVGIcon.js"
// to use SVGIcon, <SVGIcon name = "profile" width = {60}/>



class ParentComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false, user: null };
    this.setUser = this.setUser.bind(this);
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

  setUser(username) {
    this.setState({
      user: username
    });
  }

  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="Parent">
        <div className="Header">
          <header className="UJI">
            UJI
          </header>
          <h2> User: {this.state.user} </h2>
          <div className = "profileButton">
            <img width = "60px" alt="Profile Button" src={profile}/>
          </div>
        </div>
        <div className="frame">
          <Router>
            <Switch>
              <Route path="/login" render={()=><Login setUser={this.setUser.bind(this)} />} />
              <Route path="/feed" component={Feed} />
              <Route path="/postform" render={() => <PostForm user={this.state.user} />} />
              <Route path="/register" render={() => <Register setUser={this.setUser.bind(this)} />} />
            </Switch>
          </Router>
        </div>
        <div className="newPostButton">
          <img width = "60px" alt="New Post Button" src={newPost}/>
        </div>
      </div>
    );
  }
}


const App = () => {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
