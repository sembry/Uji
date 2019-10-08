import React, { Component } from 'react';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      username:'',
      password:''
    }
  }
  render() {
    return (
        <div className = "register">
        <h1>Register</h1>
        <section className="credentials">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="firstname" placeholder="First name" onChange={this.handleChange} value={this.state.username}/>
              <input type="text" name="lastname" placeholder="Last name" onChange={this.handleChange} value={this.state.username}/>
              <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.username}/>
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
export default Register;