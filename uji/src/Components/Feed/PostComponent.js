import React from 'react';
import './PostComponent.css'
import firebase from '../../firebase.js';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import Interactable from 'react-interactable/noNative'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ComplimentsForm from '../ComplimentsForm/'
import Dialog from '@material-ui/core/Dialog';
import SendSharpIcon from '@material-ui/icons/SendSharp';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.updateLike = this.updateLike.bind(this);
    this.state = { likes: this.props.likes,
                   open: false };
  }

  updateLike = (e) => {
    firebase.database().ref().child('/posts/' + this.props.postId)
        .update({likes: this.state.likes +1});
    this.setState({likes: this.state.likes+1})
  }

  handleClick = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const styles = {
      color: "#561FCC",
      '&:hover': {
        color: "#F5F4FF",
      },
      cursor: "pointer",
    }

    return (

      <Interactable.View
          onDrag={this.onDragEvent}
          gravityPoints={[{x: 0, y: 0, strength: 1000, falloff: 500, damping: 0.5}]}>
          <div className = "postContainer">
            <div className = "userName">
              <strong>{this.props.postUserName}</strong>
              <SendSharpIcon className = "complimentButton"
                style = {styles}
                onClick = {this.handleClick}
                />
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={false}
                maxWidth = {'md'}
                >
                <ComplimentsForm postUserName={this.props.postUserName}
                  user ={this.props.user}
                  handleClose={this.handleClose}/>
              </Dialog>
            </div>
            <div className = "postText">
              <p>{this.props.postText}</p>
            </div>
            <div className = "likeContainer">
              <strong className = "numberLikes">{this.state.likes}</strong>
              <ThumbUpIcon className = "thumbUpIcon"
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
