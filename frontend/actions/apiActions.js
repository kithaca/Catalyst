var Dispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/projectConstants');
var UserConstants = require('../constants/userConstants');

var ApiActions = {
  receiveAllProjects: function (projects) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.ALL_PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER,
      currentUser: currentUser
    });
  },

  receiveAllUsers: function (users) {
    Dispatcher.dispatch({
      actionType: UserConstants.ALL_USERS_RECEIVED,
      users: users
    });
  }
};

module.exports = ApiActions;
