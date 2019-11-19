import React from 'react';
import './AffirmationsFormComponent.css';
import firebase from '../../firebase.js';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'


class AffirmationsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var content = this.state.content;
    content[e.target.name] = e.target.value;
      this.setState({
          [this.state.content]: content
      });
  }

  // push post to the database
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('affirmations');
    const affirmation = {
      [this.props.user.uid]: this.state.content
    }
    var onComplete = function(error) {
      if (error) {
        console.log('Operation failed');
      } else {
        console.log('Operation completed');
      }
    }
    itemsRef.child(this.props.user.uid).set(this.state.content);
    this.props.history.push('/affirmations')
  }

  render() {
    return (
      <div className = "affirmationsForm">
        <div className = "title">
                <h1>Edit Affirmations</h1>
        </div>
        <div className = "affirmationsFrame">
          <section className="prompts">
              <form onSubmit={this.handleSubmit}>
                <h1>Question 1</h1>
                <p> My greatest strengths are… </p>
                <input type="text" name="q1" placeholder="Write anything" onChange={this.handleChange} value={this.state.content["q1"]}/>

                <h1>Question 2</h1>
                <p> 2. Fill in the blank: I was proud of myself when I ______. Why? </p>
                <input type="text" name="q2" placeholder="Write anything" onChange={this.handleChange} value={this.state.content["q2"]}/>

                <h1>Question 3</h1>
                <p> 3. What would you do today if you had all the confidence in the world? What about in a year?</p>
                <input type="text" name="q3" placeholder="Write anything" onChange={this.handleChange} value={this.state.content["q3"]}/>
                <button>Submit</button>
              </form>
          </section>
        </div>
      </div>
    );
  }
}
export default withRouter(AffirmationsForm);
