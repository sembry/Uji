import React from 'react';
import '../FormStyling.css';
import firebase from '../../firebase';
import PostForm from '../PostForm/PostFormComponent';
import setUser from '../../App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';

const LoginView = ({ user }) => {
    return (
        <div className = "form">
        <div className = "title"> 
            <h1>Profile</h1>
        </div>
        <text>Hi, {user.displayName}</text>
        </div>
    );  
}
export default LoginView;