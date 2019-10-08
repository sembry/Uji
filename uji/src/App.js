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


class ParentComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = { user: 'none' };
    this.setUser = this.setUser.bind(this);
  }

  setUser(username) {
    this.setState({
      user: username
    });
  }

  render() {
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
        <div>
          <Router>
            <Switch>
              <Route path="/login" render={()=><Login setUser={this.setUser} />} />
              <Route path="/feed" component={Feed} />
              <Route path="/postform" render={() => <PostForm user={this.state.user} />} />
              <Route path="/register" render={() => <Register setUser={this.setUser} />} />
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
