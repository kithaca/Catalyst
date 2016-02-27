var React = require('react');
var ReactDOM = require('react-dom');
var ProjectIndex = require('./components/projects/projectIndex');
var ProjectDetail = require('./components/projects/projectDetail');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var CurrentUser = require('./components/session/currentUser');
var App = require('./components/app');
var Login = require('./components/session/login');
var Signup = require('./components/session/signup');
var CatalyzeForm = require('./components/projects/catalyzeForm');
var CategoryIndex = require('./components/projects/categoryIndex');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectIndex}/>
    <Route path="profile" component={CurrentUser}></Route>
    <Route path="signup" component={Signup}></Route>
    <Route path="projects/:id" component={ProjectDetail}>
      <Route path="catalyze-form" component={CatalyzeForm}></Route>
    </Route>
    <Route path="categories" component={CategoryIndex}></Route>
    <Route path="categories/:id"></Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
});
