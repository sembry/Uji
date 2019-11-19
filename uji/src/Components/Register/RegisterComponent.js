import React from 'react';
import '../FormStyling.css';
import firebase from '../../firebase';
import PostForm from '../PostForm/PostFormComponent';
import setUser from '../../App';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';

const RegisterView = ({ onSubmit }) => {
  return (
      <div className = "register">
        <div className = "title">
          <h1>Register</h1>
        </div>
      <section className="credentials">
          <form onSubmit={onSubmit}>
            <input type="text" name="firstname" placeholder="First name" />
            <input type="text" name="lastname" placeholder="Last name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
    </section>
    </div>
  );
}
const style = {
  margin: 15,
};
export default withRouter(RegisterView);
