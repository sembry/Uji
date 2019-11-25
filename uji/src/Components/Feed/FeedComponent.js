import React from 'react';
import { link } from 'react';
import Post from './PostComponent';
import './FeedComponent.css';
import firebase from '../../firebase.js';
import "animate.css/animate.min.css";
// Uses the scroll animation library to animate on scroll
// https://www.npmjs.com/package/react-animate-on-scroll
import ScrollAnimation from 'react-animate-on-scroll';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {db: null,
      loading: true};
    }

    // fetches data asynchronously from the posts database
    componentDidMount = () => {
      const posts = firebase.database().ref('posts');
      posts.once("value").then(res => {
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
      return (
        (loading ? (
          <div> </div>
        ) : (
          <div style={{ height: '100%' }} className="feedContainer">
            <div className="affirmationTitle"> My Feed </div>
                {Object.keys(db).reverse().map(key =>
                  //<ScrollAnimation animateIn='fadeIn'>
                    <Post postUserName={db[key].username}
                    postText={db[key].content}
                    likes= {db[key].likes}
                    postId = {key}
                    user = {this.props.user} />
                  //</ScrollAnimation>
                )}
          </div>
          ))
        )
      }
    }

export default Feed;
