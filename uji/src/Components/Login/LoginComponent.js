import React from 'react';
import '../FormStyling.css';

const LoginView = ({ onSubmit }) => {
    return (
        <div className = "form">
        <div className = "title"> 
            <h1>Login</h1>
        </div>
        <div className = "frame">
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