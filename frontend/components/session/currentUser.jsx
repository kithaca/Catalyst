var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var ProjectIndexItem = require('../projects/projectIndexItem');

var CurrentUser = React.createClass({

  getInitialState: function () {
    return { currentUser: SessionStore.currentUser() };
  },

  componentDidMount: function () {
    this.currentUserListener = SessionStore.addListener(this._userChange);
    ApiUtil.fetchCurrentUser();
  },

  _userChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  render: function () {
    // debugger;
    if (Object.keys(this.state.currentUser).length > 0) {
      return (
        <div className="profile">
          <h1>Welcome, {this.state.currentUser.username}!</h1>
          <div className="created-projects">
            <h2>Projects you have created:</h2>

            <div>
              {this.state.currentUser.created_projects.map(function (project) {
                if (!project.image_url) {
                  project.image_url = "http://res.cloudinary.com/catalyst/image/upload/v1456946867/zs20ledwnp3ou2vpocp7.jpg";
                }
                return <ProjectIndexItem key={project.id} project={project}/>;
              })}
            </div>
          </div>

          <div className="catalyzed-projects">
            <h2>Projects you have catalyzed:</h2>
            <div>
              {this.state.currentUser.backed_projects.map(function (project) {
                if (!project.image_url) {
                  project.image_url = "http://res.cloudinary.com/catalyst/image/upload/v1456946867/zs20ledwnp3ou2vpocp7.jpg";
                }
                return (<ProjectIndexItem key={project.id} project={project}/>);
              })}
            </div>
          </div>

        </div>

      );
    } else {
      return (
        <div>You must be logged in to view userpage.</div>
      );
    }
  }

});

module.exports = CurrentUser;
