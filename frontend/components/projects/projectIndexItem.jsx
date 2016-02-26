var React = require('react');
var History = require('react-router').History;


var ProjectIndexItem = React.createClass({
  mixins: [History],

  showProjectDetail: function () {
    this.history.pushState(null, '/projects/' + this.props.project.id, {});
  },

  render: function () {
    return(
      <li className="project-index-item">
          <img className="thumbnail"
            onClick={this.showProjectDetail}
                   src="http://purrfectcatbreeds.com/wp-content/uploads/2014/06/abyssinian2.jpg"
                   alt="kitten" />
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
