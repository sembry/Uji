import React from 'react';
import './FormStyling.css';
import firebase from '../firebase.js';
import PostForm from './PostFormComponent';
import setUser from '../App';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';

// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebaseConfig';



// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
//     googleProvider: new firebase.auth.GoogleAuthProvider(),
//   };

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      // update text fields
      handleChange = (e) => {
          this.props.setUser(this.state.username);
          this.setState({
              [e.target.name]: e.target.value
          });
      }

      handleSignIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          this.props.history.push("/feed");
        } catch (error) {
          alert(error);
        }
      };

      // checks if login exists and directs user to home or to registration
      handleSubmit = (e) => {
        e.preventDefault();
        // const {email, password} = this.state;
        const username = this.state.username;
        const itemsRef = firebase.database().ref('users');
        const props = this.props;
        itemsRef.child(username).once('value', function(snapshot) {
            var exists = (snapshot.val() !== null);
            if (exists){
                // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                //     var errorCode = error.code;
                //     var errorMessage = error.message;
                // });
                props.setUser(username);
                props.history.push("/postform");
            }
            else {              
                props.history.push("/register");
            }
        });
      }

      render() {
        return (
          <div className = "form">
            <div className = "title"> 
                <h1>Login</h1>
            </div>
            <div classname = "frame">
                <div className="credentials">
                    {/* <form onSubmit={this.handleSubmit}>                    <form onSubmit={this.handleSubmit}> */}
                    <form onSubmit={this.handleSignIn}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                    <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    <button>Submit</button>
                    </form>
                </div>
            </div>
          </div>
        );
      }
}
export default withRouter(Login);