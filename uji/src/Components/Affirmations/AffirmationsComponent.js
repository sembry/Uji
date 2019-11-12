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
  }

  // fetches data asynchronously from the posts database
  componentDidMount = () => {
    const posts = firebase.database().ref('affirmations');
    posts.once("value").then(res => {
      if (res.val() != undefined){
        var filtered = res.val()[this.props.user.uid];
        this.setState({db: filtered, loading: false});
        if (filtered == null){
          this.props.history.push("/affirmationsform");
        }
      }
    });
  }

  noAffirmations() {
    this.props.history.push("/affirmationsform");
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
            {Object.keys(db).map(key =>
              <AffirmationsCard postText={db[key]}/>
            )}
          </div>
        ) : (
          <div>Loading affirmations...</div>
        )
      ) 
    }
  }

export default withRouter(Affirmations);
