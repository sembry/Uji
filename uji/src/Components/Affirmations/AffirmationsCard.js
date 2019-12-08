import React from 'react';
import './AffirmationsCard.css'
import firebase from '../../firebase.js';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import Interactable from 'react-interactable/noNative'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


class AffirmationsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <p> {this.props.promptText} </p>
       <div className="affirmationsCardContainer">{this.props.postText}</div>
      </div>
    );
  }
}
export default withRouter(AffirmationsCard);
