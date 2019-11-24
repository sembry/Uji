import React from 'react';
import firebase from '../../firebase.js';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

class Compliments extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      db: null,
      loading: true
    };
  }

  componentDidMount = () => {
    const posts = firebase.database().ref('compliments');
    try {
      const postForID = posts.child(this.props.user.uid);
      postForID.once("value").then(res => {
        if (res.val() != undefined){
          console.log(res.val());
          var filtered = res.val();
          this.setState({db: filtered, loading: false});
        }
      });
    }
    // there are no compliments for the current user ID
    catch {
      this.setState({db: [], loading: false});
    }
  }

  render() {
    const { loading, db } = this.state;
    console.log(db);
    return loading ? (
      <div>Loading...</div>
      ) : (
        db ? (
          <div>
          <h1> My Compliments </h1>
            {Object.keys(db).map(key =>
              <p>{db[key].content}</p>
            )}
          </div>
        ) : (
          <div>
          <h1> My Compliments </h1>
          <p> Compliments from others will be shown here! </p>
          </div>
        )
      )
    }
  }

export default withRouter(Compliments);
