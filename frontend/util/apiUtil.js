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
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: user,
      error: function () {
        console.log("Could not create new user.");
      },
      success: function (data) {
        ApiActions.receiveCurrentUser(data);

        callback();
        console.log("New user created. Login successful");
      }
    });
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

  logout: function (callback) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      error: function () {
        console.log("ajax logout not successful");
      },
      success: function () {
        ApiActions.clearSession();
        callback();
        console.log("logout successful");
      }
    });
  }

};

module.exports = ApiUtil;
