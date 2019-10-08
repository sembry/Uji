import React from 'react';
import './PostComponent.css';
import firebase from '../firebase.js';

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

  // submits the new post with content + user to database
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('posts');
    const post = {
      content: this.state.content,
      username: this.props.user
    }
    itemsRef.push(post);
    // switch back to feed view
    this.props.history.push('/feed')
  }

  render() {
    return (
      <div className = "postform">
        <h1>New post</h1>
        <section className="credentials">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="content" placeholder="Write anything" onChange={this.handleChange} value={this.state.content}/>
              <button>Submit</button>
            </form>
        </section>
      </div>
    );
  }
}
export default PostForm;
