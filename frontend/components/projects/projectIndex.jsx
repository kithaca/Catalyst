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

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  render: function () {
    return(
      <div>
        <figure className="background-image">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBbPt2RA9kHP2Bi54hUR2H8TgR-2cqP8n1Z4LBaA54p0dM0fao"
               alt="background" />
        </figure>

        <ul className="project_index group">
          {this.state.projects.map(function (project) {
            return (<ProjectIndexItem key={project.id} project={project} />);
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ProjectIndex;
