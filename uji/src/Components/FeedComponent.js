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
        <Post userName={"srah"} postText={"I think this is cool!"} />
        <Post userName={"srah"} postText={"hah help"} />
      </div>
    );
  }
}
export default Feed;
