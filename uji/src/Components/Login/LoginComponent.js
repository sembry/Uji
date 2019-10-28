import React from 'react';
import '../FormStyling.css';
import firebase from '../../firebase';
import PostForm from '../PostFormComponent';
import setUser from '../../App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';

const LoginView = ({ onSubmit }) => {
    return (
        <div className = "form">
        <div className = "title"> 
            <h1>Login</h1>
        </div>
        <div classname = "frame">
            <div className="credentials">
                <form onSubmit={onSubmit}>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </div>
    );  
}
export default LoginView;