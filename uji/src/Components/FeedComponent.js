import React from 'react';
import Post from './PostComponent';
import firebase from '../firebase.js';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

// the idea here is to add the posts from the database to the state here

  // componentWillMount() {
  //   var database = firebase.database();
  //   database.once('value', function(snapshot) {
  //     snapshot.forEach(function(childSnapshot) {
  //       var childKey = childSnapshot.key;
  //       var childData = childSnapshot.val();
  //   // ...
  //     });
  //   });
  // }



  render() {
    return (
      <div>
          <h1>Feed</h1>
        <Post userName={"srah"} postText={"I think this is cool!"} />
        <Post userName={"srah"} postText={"hah help"} />
      </div>
    );
  }
}
export default Feed;
