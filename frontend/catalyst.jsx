var React = require('react');
var ReactDOM = require('react-dom');
var ProjectIndex = require('./components/projects/projectIndex');

window.ProjectStore = require('./stores/projectStore');
window.ApiUtil = require('./util/apiUtil');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<ProjectIndex />, document.getElementById('root'));
});
