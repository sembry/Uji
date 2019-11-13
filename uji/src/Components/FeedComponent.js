import React from 'react';
import Post from './PostComponent';
import './FeedComponent.css';
import firebase from '../firebase.js';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      db: null,
      loading: true};
    }

    // fetches data asynchronously from the posts database
    componentDidMount = () => {
      const posts = firebase.database().ref('posts');
      posts.once("value").then(res => {
        console.log("success", res.val())
        if (res.val() != undefined){
          this.setState({db: res.val(), loading: false})
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
      ) : ( <div className="feedContainer">
        {Object.keys(this.state.db).map(key =>
          <Post userName={this.state.db[key].username}
          postText={this.state.db[key].content}
          likes= {this.state.db[key].likes}
          postId = {key}/>
        )}
        </div>)
      }
    }

export default Feed;
