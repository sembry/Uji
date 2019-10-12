import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Login from './Components/LoginComponent';
import Feed from './Components/FeedComponent';
import Register from './Components/RegisterComponent';
import PostForm from './Components/PostFormComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const routing = (
//     <Router>
//       <div>
//         <Route path="/" component={App} />
//         <Route path="/login" component={Login} />
//         <Route path="/feed" component={Feed} />
//         <Route path="/register" component={Register} />
//         <Route path="/postform" component={PostForm} />
//       </div>
//     </Router>
//   )
  
// ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
