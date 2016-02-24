var Dispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/projectConstants');

var ApiActions = {
  receiveAllProjects: function (projects) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.ALL_PROJECTS_RECEIVED,
      projects: projects
    });
  }
};

module.exports = ApiActions;
