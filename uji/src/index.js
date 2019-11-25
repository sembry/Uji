import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'pace-js';
import 'pace-js/themes/purple/pace-theme-material.css';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
