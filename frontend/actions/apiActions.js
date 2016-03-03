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

  receiveOneProject: function (project) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.ONE_PROJECT_RECEIVED,
      project: project
    });
  },

  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER,
      currentUser: currentUser
    });
  },

  addNewUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.ADD_NEW_USER,
      user: user
    });
  },

  clearSession: function () {
    Dispatcher.dispatch({
      actionType: UserConstants.CLEAR_SESSION,
    });
  },

  receiveAllUsers: function (users) {
    Dispatcher.dispatch({
      actionType: UserConstants.ALL_USERS_RECEIVED,
      users: users
    });
  },

  addNewProject: function (project) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.ADD_NEW_PROJECT,
      project: project
    });
  },

};

module.exports = ApiActions;
