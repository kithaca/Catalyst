var ApiActions = require('../actions/apiActions.js');

var ApiUtil = {

  fetchAllProjects: function () {
    $.ajax({
      url: '/api/projects',
      method: 'GET',
      success: function (projects) {
        ApiActions.receiveAllProjects(projects);
      }
    });
  },

  fetchOneProject: function (id) {
    $.ajax({
      url: 'api/projects/' + id,
      method: 'GET',
      error: function () {
        console.log('Project does not exist.');
      },
      success: function (project) {
        ApiActions.receiveOneProject(project);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session/current',
      method: 'GET',
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
  },

  createProject: function (project, callback) {
    $.ajax({
      url: 'api/projects',
      method: 'POST',
      data: project,
      error: function (req) {
        console.log("new project not added");
      },
      success: function (data) {
        ApiActions.addNewProject(data);
        console.log("new project added");
        callback(data.id);
      }
    });
  },

  fetchSearchedProjects: function (query) {
    $.ajax({
      url: 'api/projects',
      method: 'GET',
      data: {query: query},
      error: function () {
        console.log("Search unsuccessful");
      },
      success: function (data) {
        ApiActions.receiveAllProjects(data);
        console.log("search complete");
      }
    });
  },

  fetchProjectsByCategory: function (category, callback) {
    $.ajax({
      url: 'api/projects',
      method: 'GET',
      data: {category: category},
      error: function () {
      },
      success: function (data) {
        callback();
        ApiActions.receiveAllProjects(data);
      }
    });
  },

  createProjectBacking: function (project_backing, callback) {
    $.ajax({
      url: 'api/project_backings',
      method: 'POST',
      data: project_backing,
      error: function (req) {
        console.log("new project backing not added");
      },
      success: function (data) {
        ApiActions.receiveOneProject(data);
        callback();
        console.log("new project backing added and project updated");
      }
    });
  }
};

module.exports = ApiUtil;
