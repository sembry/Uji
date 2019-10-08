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

      handleChange(e) {
          this.setState({
              [e.target.name]: e.target.value
          });
      }

      handleSubmit(e) {
        e.preventDefault();
        const login = {
          username: this.state.username,
          password: this.state.password
        }
        this.checkLogins(login);
      }

      checkLogins(login) {
          const itemsRef = firebase.database().ref('logins');
          itemsRef.on('value', (snapshot) => {
              let logins = snapshot.val();
              for (let item in logins){
                  if (login = item){
                    this.props.setUser(this.state.username);
                    this.props.history.push("/postform");
                  }
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