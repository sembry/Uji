import React from 'react';
import firebase from '../firebase.js';

class Affirmations extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
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
          this.setState({db: filtered, loading: false})
        }
      });
    }

    render() {
      const { loading, db } = this.state;
      // if data has not been fetched from the database,
      // show nothing. else, create Post HTML objects from
      // data fetched
      return loading ? (
        <div> </div>
      ) : (
        <div>
        <h2> My Affirmations </h2>
        {Object.keys(this.state.db).map(key =>
          <p>{this.state.db[key]}</p>
        )}
        </div>)
      }
    }

export default Affirmations;
