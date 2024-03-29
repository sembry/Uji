// Common UI shared amongst all pages
// Contains header with title, profile button, new post button
import React from 'react';
import profile from './Assets/profile60.png';
import newPost from './Assets/newPost60.png';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Affirmations from './Components/Affirmations/AffirmationsComponent'
import AffirmationsForm from './Components/Affirmations/AffirmationsFormComponent'
import Login from './Components/Login';
import Feed from './Components/Feed/FeedComponent';
import MyPage from './Components/MyPageComponent';
import Register from './Components/Register';
import PostForm from './Components/PostForm';
import Profile from './Components/Profile';
import PrivateRoute from './PrivateRoute';
import Landing from './Components/LandingComponent'
import * as serviceWorker from './serviceWorker';
import firebase from './firebase.js'
// Icons imported using material-ui
import Dialog from '@material-ui/core/Dialog';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircle from './profileButton';
import FeedButton from './feedButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      user: null,
      open: false,
    };
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

  logout = () => {
    firebase.auth().signOut()
      .then(function() {
        // Sign-out successful.
        this.setState({
          authenticated: false,
          user: null,
          loading: false
        });
      })
      .catch(function(error) {
        // An error happened
      });
  }

  render() {
    const { authenticated, loading } = this.state;
    var user = firebase.auth().currentUser;

    return (
      <div class="App Fade">
        <div className="App">
          <Router>
            <div className="Parent">
              <div className="Header">
                <header className="UJI" >
                  <FeedButton />
                </header>
                <div className="profileButton" >
                  <AccountCircle />
                </div>
              </div>
              <div className="frame">
                <Switch>
                  <PrivateRoute exact path="/" render={() => <Feed user={this.state.user}/>} authenticated={authenticated}/>
                  <Route path="/landing"
                    render={
                      authenticated ? () => <Feed user={this.state.user}/> :
                      () => <Landing user={this.state.user}/>} authenticated={authenticated}/>
                  <Route path="/login" render={(props) => <Login {...props} />} />
                  <PrivateRoute path="/feed" render={() => <Feed user={this.state.user} />} authenticated={authenticated}/>
                  <Route path="/register" render={() => <Register />} />
                  <PrivateRoute exact path="/affirmations" render={() => <MyPage user={this.state.user}/>} authenticated={authenticated}/>
                  <PrivateRoute exact path="/affirmationsform" render={() => <AffirmationsForm user={this.state.user}/>} authenticated={authenticated}/>
                  <PrivateRoute exact path="/profile" render={() => <Profile user={this.state.user} />} authenticated={authenticated}/>
                </Switch>
              </div>
              <ExitToAppRoundedIcon className = {this.state.user ? 'logout' : "hidden"}
                onClick = {this.logout}
                style={{ fontSize: "70px" }}
              />
              <AddCircleIcon className = {this.state.user ? 'newPostButton' : "hidden"} style={{ fontSize: "70px" }} onClick={this.handleClick}/>
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
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
