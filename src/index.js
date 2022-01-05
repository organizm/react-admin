import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftPage from './page/LeftPage';
import RightPage from './page/RightPage';
import Contacts from './page/Contacts';


ReactDOM.render(
  <Router history="heshHistory">
    <div>
      <Route exact path="/" component={App} />
      <Route path="/page/LeftPage" component={LeftPage} />
      <Route path="/page/RightPage" component={RightPage} />
      <Route path="/page/Contacts" component={Contacts} />
      
    </div>
  </Router>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
