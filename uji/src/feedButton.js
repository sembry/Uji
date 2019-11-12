import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'


class FeedButton extends React.Component{
    constructor(props) {
      super(props);
    };

    handleFeedClick = () => {
        this.props.history.push("/feed");
    };

    render() {
        return (
            <header onClick={this.handleFeedClick}>
                UJI
            </header>
        );
    }
}
    
export default withRouter(FeedButton);