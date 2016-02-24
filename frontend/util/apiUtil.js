var ApiActions = require('../actions/apiActions.js');

var ApiUtil = {

  fetchAllProjects: function () {
    $.ajax({
      url: '/api/projects',
      success: function (projects) {
        ApiActions.receiveAllProjects(projects);
      }
    });
  }

};

module.exports = ApiUtil;
