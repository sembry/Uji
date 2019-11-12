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
import * as serviceWorker from './serviceWorker';
import firebase from './firebase.js'
// Icons imported using material-ui
import Dialog from '@material-ui/core/Dialog';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
            <AccountCircleIcon className="profileButton" style={{ fontSize: "70px" }}/>
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
                <PrivateRoute exact path="/profile" render={() => <Profile user={this.state.user} />} authenticated={this.state.authenticated}/>
              </Switch>
            </Router>
          </div>
          <AddCircleIcon className="newPostButton" style={{ fontSize: "70px" }} onClick={this.handleClick}/>
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
