var React = require('react');
var History = require('react-router').History;


var ProjectIndexItem = React.createClass({
  mixins: [History],

  showProjectDetail: function () {
    this.history.pushState(null, '/project/' + this.props.project.id, {});
  },

  render: function () {
    return(
      <li className="project_index_item">
        <p>Title: {this.props.project.title}</p>
        <p>Category: {this.props.project.category}</p>
        <p>Tagline: {this.props.project.tagline}</p>
        <p>Description: {this.props.project.description}</p>
        <p>Funding Goal: {this.props.project.goal_amt}</p>
        <p>Start: {this.props.project.start_date}</p>
        <p>Deadline: {this.props.project.deadline}</p>
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
