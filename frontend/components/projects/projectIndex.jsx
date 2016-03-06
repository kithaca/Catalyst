var React = require('react');
var History = require('react-router').History;
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var ProjectIndexItem = require('./projectIndexItem');
var ProjectCarousel = require('./carousel');

var ProjectIndex = React.createClass({
  getInitialState: function () {
    return { projects: ProjectStore.all() };
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    // ApiUtil.fetchAllProjects();
    ApiUtil.fetchSearchedProjects(this.props.location.query.query);
  },

  _onChange: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  render: function () {
    this.state.projects.forEach(function (project) {
      if (project.image_url === null) {
        project.image_url = "http://res.cloudinary.com/catalyst/image/upload/v1456946867/zs20ledwnp3ou2vpocp7.jpg";
      }
    });

    return(
      <div>
        <ProjectCarousel />
        <div className="project-index group">
        <ul>
          {this.state.projects.map(function (project) {
            return (<ProjectIndexItem key={project.id} project={project} />);
          })}
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = ProjectIndex;
