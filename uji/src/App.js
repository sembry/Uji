// Common UI shared amongst all pages
// Contains header with title, profile button, new post button
import React from 'react';
import profile from './Assets/profile60.png';
import newPost from './Assets/newPost60.png';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Affirmations from './Components/AffirmationsComponent'
import AffirmationsForm from './Components/AffirmationsFormComponent'
import Login from './Components/Login';
import Feed from './Components/FeedComponent';
import Register from './Components/Register';
import PostForm from './Components/PostForm';
import Profile from './Components/Profile';
import PrivateRoute from './PrivateRoute';
import Landing from './Components/LandingComponent'
import * as serviceWorker from './serviceWorker';
import firebase from './firebase.js'
import Dialog from '@material-ui/core/Dialog';

// TODO: fix SVGIcon.js to properly render icons of correct size to fix image quality issues
// import SVGIcon from "./Assets/SVGIcon.js"
// to use SVGIcon, <SVGIcon name = "profile" width = {60}/>


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false, user: null, open: false };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          user: null,
          loading: false
        });
      }
    });
  }

  handleClick = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


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
                <PrivateRoute exact path="/" render={() => <Feed user={this.state.user} />} authenticated={authenticated}/>
                <Route path="/login" render={(props) => <Login {...props} />} />
                <PrivateRoute exact path="/feed" render={() => <Feed user={this.state.user} />} authenticated={authenticated}/>
                <Route path="/register" render={() => <Register />} />
                <Route path="/affirmations" render={() => <Affirmations user={this.state.user}/>} />
                <Route path="/affirmationsform" render={() => <AffirmationsForm user={this.state.user}/>} />
                <Route path="/landing" render={() => <Landing user={this.state.user}/>} />
                <PrivateRoute exact path="/profile" render={() => <Profile user={this.state.user} />} authenticated={this.state.authenticated}/>
              </Switch>
            </Router>
          </div>
          <div className="newPostButton">
            <img width = "60px" alt="New Post Button" cursor="pointer" src={newPost} onClick={this.handleClick}/>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth={false}
            maxWidth = {'md'}
            >
            <PostForm user={user} handleClose={this.handleClose}/>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default App;
