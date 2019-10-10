import React from 'react';
import './PostComponent.css';
import firebase from '../firebase.js';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  // push post to the database
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('posts');
    const post = {
      content: this.state.content,
      username: this.props.user
    }
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }
    itemsRef.child(this.props.user).set(post, onComplete);
    // switch back to feed view
    this.props.history.push('/feed')
  }

  render() {
    return (
      <div className = "postform">
        <h1>New post</h1>
        <section className="credentials">
            <p> {this.props.user} </p>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="content" placeholder="Write anything" onChange={this.handleChange} value={this.state.content}/>
              <button>Submit</button>
            </form>
        </section>
      </div>
    );
  }
}
export default withRouter(PostForm);
