var React = require('react');
var History = require('react-router').History;
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
    // ApiUtil.fetchSearchedProjects(this.props.location.query);
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
      <div className="project-index group">
        <h1 className="index-title">Explore Projects</h1>
        <figure className="background-image">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBbPt2RA9kHP2Bi54hUR2H8TgR-2cqP8n1Z4LBaA54p0dM0fao"
               alt="background" />
        </figure>

        <ul>
          {this.state.projects.map(function (project) {
            return (<ProjectIndexItem key={project.id} project={project} />);
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ProjectIndex;
