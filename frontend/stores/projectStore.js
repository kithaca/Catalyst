var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ProjectStore = new Store(AppDispatcher);
var ProjectConstants = require('../constants/projectConstants');

var _projects = {};

var resetProjects = function (projects) {
  _projects = {};
  for (var i = 0; i < projects.length; i++) {
    _projects[projects[i].id] = projects[i];
  }
};

var resetProject = function (project) {
  _projects[project.id] = project;
};

var createProject = function (project) {
  _projects[project.id] = project;
};

ProjectStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProjectConstants.ALL_PROJECTS_RECEIVED:
      resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.ONE_PROJECT_RECEIVED:
      resetProject(payload.project);
      ProjectStore.__emitChange();
      break;

    case ProjectConstants.ADD_NEW_PROJECT:
      createProject(payload.project);
      ProjectStore.__emitChange();
      break;
  }
};

ProjectStore.all = function () {
  var projectArr = [];
  Object.keys(_projects).forEach(function (key) {
    projectArr.push(_projects[key]);
  });

  return projectArr;
};

ProjectStore.categories = function () {
  var categories = {};
  Object.keys(_projects).forEach(function (projectId) {
    var proj = _projects[projectId];
    if (categories[proj.category] === undefined) {
      categories[proj.category] = 1;
    } else {
      categories[proj.category] += 1;
    }
  });
  return categories;
};

ProjectStore.find = function (id) {
  return _projects[id];
};

module.exports = ProjectStore;
