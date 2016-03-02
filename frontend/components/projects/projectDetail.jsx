var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');

var ProjectDetail = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { project: ProjectStore.find(parseInt(this.props.params.id)) };
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchOneProject(this.props.params.id);
  },

  _onChange: function () {
    this.setState({ project: ProjectStore.find(parseInt(this.props.params.id)) });
  },

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  render: function () {
    if (this.state.project === undefined) {
      return <div>Project does not exist :(</div>;
    }

    var date = Date.now();
    return(
      <div className="project-detail">

        <div className="project-header">
          <h1>{this.state.project.title}: {this.state.project.tagline}</h1>
          <h3>Creator: {this.state.project.creator}</h3>
        </div>

        <div className="project-display">
          <div className="image-wrapper">
            <img src={this.state.project.image_url}
                 alt="project_image"
            className="project-pic" />
          </div>

          <div className="details">
            <h4>{this.state.project.description}</h4>
          </div>
        </div>

        <div className="sidebar">
          <h3>{this.state.project.total_backers} catalysts</h3>
          <h3>${this.state.project.pledged} pledged</h3>
          <h3>Goal: ${this.state.project.goal_amt}</h3>
          <h3>{this.state.deadline - date} Days Left</h3>

          <button to="catalyze-form" className="button">Catalyze</button>
        </div>


      </div>

    );

  }

});

module.exports = ProjectDetail;
