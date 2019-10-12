import React from 'react';
import Post from './PostComponent';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <h1>Feed</h1>
      </div>
      // this is where we will fetch the information from the database and put it into a post
      // for now we just will have 2 dummy posts as filler
      <Post userName={"srah"} postText={"I think this is cool!"} />
      <Post userName={"srah"} postText={"I think this is cool!"} />
    );
  }
}
export default Feed;
