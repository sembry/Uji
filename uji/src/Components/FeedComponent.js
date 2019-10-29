import React from 'react';
import Post from './PostComponent';
import firebase from '../firebase.js';

class Feed extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
  }
  render() {
    return (
      <div>
        <div>
            <h1>Feed</h1>
        </div>
        {/* // this is where we will fetch the information from the database and put it into a post
        // for now we just will have 2 dummy posts as filler */}
        <Post userName={"srah"} postText={"I think this is cool!"} />
        <Post userName={"srah"} postText={"I think this is cool!"} />
      </div>
    );
  }
}
=======
    this.state =  {db: null,
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
      ) : ( <div>
        {Object.keys(this.state.db).map(key =>
          <Post userName={this.state.db[key].username}
          postText={this.state.db[key].content}
          likes= {this.state.db[key].likes}
          postId = {key}/>
        )}
        </div>)
      }
    }

>>>>>>> 005c13ece83651c39e513e2acf04203383d1594b
export default Feed;
