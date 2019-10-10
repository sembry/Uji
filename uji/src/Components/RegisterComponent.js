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

  // checks if login exists and directs user to home or to registration
  handleSubmit(e) {
    e.preventDefault();
    const state = this.state;
    const username = this.state.username;
    const itemsRef = firebase.database().ref('users');
    itemsRef.child(username).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        if (exists){
          this.props.history.push("/login");
        }
        else {
          const newUser = {
            firstname: state.firstname,
            lastname: state.lastname,
            email: state.email,
            username: state.username,
            password: state.password
          }
          itemsRef.set(username, newUser);
          this.props.history.push("/register");
        }
    });
  }

  render() {
    return (
        <div className = "register">
        <h1>Register</h1>
        <section className="credentials">
            <form onSubmit={this.handleSubmit}>
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