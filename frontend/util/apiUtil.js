var ApiActions = require('../actions/apiActions.js');

var ApiUtil = {

  fetchAllProjects: function () {
    $.ajax({
      url: '/api/projects',
      success: function (projects) {
        ApiActions.receiveAllProjects(projects);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session/current',
      success: function (currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
      }
    });
  }

};

module.exports = ApiUtil;
