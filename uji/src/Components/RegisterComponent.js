import React, { Component } from 'react';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './RegisterComponent.css';
import firebase from '../firebase.js';
import PostForm from './PostFormComponent';
import setUser from '../App';


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      username:'',
      password:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // update text fields
  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/feed");
    } catch (error) {
      alert(error);
    }
  };

  // checks if login exists and directs user to home or to registration
  handleSubmit(e) {
    e.preventDefault();
    const state = this.state;
    const username = this.state.username;
    const itemsRef = firebase.database().ref('users');
    const history = this.props.history;
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }
    itemsRef.child(username).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        if (exists){
          history.push("/login");
        } else {
          const newUser = {
            firstname: state.firstname,
            lastname: state.lastname,
            email: state.email,
            username: state.username,
            password: state.password
          }
          itemsRef.child(username).set(newUser, onComplete);
          // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          //   var errorCode = error.code;
          //   var errorMessage = error.message;
          // });
          history.push("/feed");
        }
    });
  }

  render() {
    return (
        <div className = "register">
        <h1>Register</h1>
        <section className="credentials">
            {/* <form onSubmit={this.handleSubmit}> */}
            <form onSubmit={this.handleSignUp}>
              <input type="text" name="firstname" placeholder="First name" onChange={this.handleChange} value={this.state.firstname}/>
              <input type="text" name="lastname" placeholder="Last name" onChange={this.handleChange} value={this.state.lastname}/>
              <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
              <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
              <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
              <button>Submit</button>
            </form>
      </section>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default withRouter(Register);