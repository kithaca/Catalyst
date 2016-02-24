var React = require('react');
var ReactDOM = require('react-dom');
var ProjectIndex = require('./components/projects/projectIndex');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var CurrentUser = require('./components/session/currentUser');
var App = require('./components/app');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectIndex}/>
    <Route path="current" component={CurrentUser}></Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
});
