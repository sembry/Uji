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
      <Interactable.View
          onDrag={this.onDragEvent}
          gravityPoints={[{x: 0, y: 0, strength: 1000, falloff: 500, damping: 0.5}]}>
          <div className="affirmationsCardContainer">{this.props.postText}</div>
      </Interactable.View>
    );
  }
}
export default withRouter(AffirmationsCard);
