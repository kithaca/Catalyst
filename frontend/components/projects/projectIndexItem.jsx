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
        <img className="thumbnail"
                   src="http://sfgov.org/acc/ftp/uploadedimages/acc/Adoption_Center/fostercare/Blue%2063008(1).jpg"
                   alt="kitten" />
        <h4 className="proj_category">{this.props.project.category}</h4>
        <h5 className="proj_title">{this.props.project.title}</h5>
        <h6 className="proj_tagline">{this.props.project.tagline}</h6>
        <p className="proj_descr">{this.props.project.description}</p>
        <h4 className="proj_goal">Funding Goal: ${this.props.project.goal_amt}</h4>
        <h6 className="proj_start">Start: {this.props.project.start_date}</h6>
        <h6 className="proj_deadline">Deadline: {this.props.project.deadline}</h6>
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
