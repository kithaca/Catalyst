var React = require('react');
var History = require('react-router').History;


var ProjectIndexItem = React.createClass({
  mixins: [History],

  showProjectDetail: function () {
    this.history.pushState(null, '/projects/' + this.props.project.id, {});
  },

  render: function () {
    var thumbnailStyle = {
      backgroundImage: 'url(' + this.props.project.image_url + ')'
    };
    // debugger;
    return(
      <li className="project-index-item">
          <div className="thumbnail"
                 onClick={this.showProjectDetail}
                 style={thumbnailStyle}
                   src={this.props.project.image_url}
                   alt="project_image" />
        <h4 className="proj-category">{this.props.project.category}</h4>
        <h5 className="proj-title">{this.props.project.title}</h5>
        <h6 className="proj-creator">Creator: {this.props.project.creator}</h6>
        <h6 className="proj-tagline">{this.props.project.tagline}</h6>
        <p className="proj-descr">{this.props.project.description}</p>
        <h4 className="proj-goal">Funding Goal: ${this.props.project.goal_amt}</h4>
        <h6 className="proj-start">Start: {this.props.project.start_date}</h6>
        <h6 className="proj-deadline">Deadline: {this.props.project.deadline}</h6>
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
