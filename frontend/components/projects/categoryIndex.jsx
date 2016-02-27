var React = require('react');
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

var CategoryIndex = React.createClass({

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

  componentWillUnmount: function () {
    this.projectListener.remove();
  },


  render: function () {
    return <div></div>;
  }

});

module.exports = CategoryIndex;
