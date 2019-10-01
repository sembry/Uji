import React from 'react';
import profile from './profile60.png';
import newPost from './newPost60.png';
import './App.css';
import firebase from './firebase.js'


function App() {
  return (
    <div className="Parent">
      <div className="Header">
        <header className="UJI">
          UJI
        </header>
        <div className = "profileButton">
          <img width = "60px" alt="Profile Button" src={profile}/>
        </div>
      </div>
      <div className="newPostButton">
        <img width = "60px" alt="New Post Button" src={newPost}/>
      </div>
    </div>
  );
}

export default App;
