var React = require('react');
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var ProjectIndexItem = require('./projectIndexItem');

var ProjectIndex = React.createClass({
  getInitialState: function () {
    return { projects: ProjectStore.all() };
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchAllProjects();
  },

  _onChange: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  render: function () {
    debugger;
    return(
      <ul>
        {this.state.projects.map(function (project) {
          return (<ProjectIndexItem key={project.id} project={project} />);
        })}
      </ul>
    );
  }
});

module.exports = ProjectIndex;
