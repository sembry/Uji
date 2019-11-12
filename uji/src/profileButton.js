import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'


class AccountCircle extends React.Component{
    constructor(props) {
      super(props);
    };

    handleProfileClick = () => {
        console.log("click!");
        this.props.history.push("/affirmations");
    };

    render() {
        return (
            <AccountCircleIcon style={{ fontSize: "70px" }} onClick={this.handleProfileClick}/>
        );
    }
}
    
export default withRouter(AccountCircle);