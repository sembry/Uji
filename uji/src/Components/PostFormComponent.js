import React from 'react';
import './FormStyling.css';
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
      uid: this.props.user.uid,
      username: this.props.user.displayName,
      likes: 0
    }
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }
    itemsRef.push(post);
    // switch back to feed view
    this.props.history.push('/feed')
  }

  render() {
    return (
      <div className = "form">
        <div className = "title">
                <h1>New Post</h1>
        </div>
        <div classname = "frame">
          <section className="credentials">
              <h1>User: {this.props.user.displayName}</h1>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="content" placeholder="Write anything" onChange={this.handleChange} value={this.state.content}/>
                <button>Submit</button>
              </form>
          </section>
        </div>
      </div>
    );
  }
}
export default withRouter(PostForm);
