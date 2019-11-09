import React from 'react';
import './PostComponent.css'
import firebase from '../firebase.js';
import { withRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Interactable from 'react-interactable/noNative'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.updateLike = this.updateLike.bind(this);
    this.state = { likes: this.props.likes };
  }

  updateLike = (e) => {
    firebase.database().ref().child('/posts/' + this.props.postId)
        .update({likes: this.props.likes +1});
    this.setState({likes: this.props.likes+1})
    this.props.history.push("/feed");
  }

  render() {
    const styles = {
      color: "#561FCC",
      '&:hover': {
        color: "#F5F4FF",
      },
      fontSize: "20px",
      cursor: "pointer",
    }

    return (

      <Interactable.View
          // horizontalOnly={true}
          // snapPoints={[{x: 0}, {x: 200}]}
          // onSnap={this.onDrawerSnap}
          onDrag={this.onDragEvent}
          gravityPoints={[{x: 0, y: 0, strength: 1000, falloff: 500, damping: 0.5}]}>
          <div className = "postContainer">
            <div className = "userName">
              <strong>{this.props.userName}</strong>
            </div>
            <div className = "postText">
              <p>{this.props.postText}</p>
            </div>
            <div className = "likeContainer">
              <strong className = "numberLikes">{this.state.likes}</strong>
              <ThumbUpIcon 
                style = {styles} 
                onClick={this.updateLike}
                />
            </div>
          </div>
      </Interactable.View>
      
    );
  }
}
export default withRouter(Post);
