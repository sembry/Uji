import React from 'react';
import './LoginComponent.css';
import firebase from '../firebase.js';
import PostForm from './PostFormComponent';
import setUser from '../App';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        const username = this.state.username;
        const itemsRef = firebase.database().ref('users');
        itemsRef.child(username).once('value', function(snapshot) {
            var exists = (snapshot.val() !== null);
            if (exists){
                this.props.setUser(this.state.username);
                this.props.history.push("/");
            }
            else {
                this.props.history.push("register");
            }
        });
      }

      render() {
        return (
          <div className = "login">
            <div> 
                <h1>Login</h1>
            </div>
            <section className="credentials">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                  <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                  <button>Submit</button>
                </form>
          </section>
          </div>
        );
      }
}
export default withRouter(Login);