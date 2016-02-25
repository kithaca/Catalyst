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
  },

  createUser: function (user, callback) {

  },

  login: function (user, callback) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function (data) {
        ApiActions.receiveCurrentUser(data);

        callback();
        console.log("login successful");
      }
    });
  },

  logout: function () {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: function () {
        console.log("logout successful");
      }
    });
  }

};

module.exports = ApiUtil;
