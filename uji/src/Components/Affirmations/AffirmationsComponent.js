import React from 'react';
import firebase from '../../firebase.js';
import './AffirmationsComponent.css';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import AffirmationsCard from './AffirmationsCard.js';

class Affirmations extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      db: null,
      loading: true
    };
    this.affirmationPrompts = {
      "q1": "My greatest strengths are…",
      "q2": "Fill in the blank: I was proud of myself when I ______. Why?",
      "q3": "What would you do today if you had all the confidence in the world? What about in a year?"
    };
  }

  goToAffirmationsForm = (e) => {
    this.props.history.push("/affirmationsform");
  }

  // fetches data asynchronously from the posts database
  componentDidMount = () => {
    const posts = firebase.database().ref('affirmations');
    posts.once("value").then(res => {
      if (res.val() != undefined){
        var filtered = res.val()[this.props.user.uid];
        this.setState({db: filtered, loading: false});
        if (filtered == null){
          this.goToAffirmationsForm();
        }
      }
    });
  }

  render() {
    const { loading, db } = this.state;
    // if data has not been fetched from the database,
    // show nothing. else, create Post HTML objects from
    // data fetched
    return loading ? (
      <div>Loading...</div>
      ) : (
        db ? (
          <div className="affirmationContainer">
            <div className="affirmationTitle"> My Affirmations </div>
            <button onClick={this.goToAffirmationsForm}> Edit Affirmations </button>
            {Object.keys(db).map(key =>
              <AffirmationsCard promptText={this.affirmationPrompts[key]}
                postText={db[key]}/>
            )}
          </div>
        ) : (
          <div>Loading affirmations...</div>
        )
      )
    }
  }

export default withRouter(Affirmations);
