var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserStore = new Store(AppDispatcher);
var UserConstants = require('../constants/userConstants');

var _users = {};

var resetUsers = function (users) {
  _users = {};
  for (var i = 0; i < users.length; i++) {
    _users[users[i].id] = users[i];
  }
};

var addNewUser = function (user) {
  _users[user.id] = user;
};

UserStore.all = function () {
  var usersArr = [];
  Object.keys(_users).forEach(function (key) {
    usersArr.push(_users[key]);
  });

  return usersArr;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.ALL_USERS_RECEIVED:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;

    case UserConstants.ADD_NEW_USER:
      addNewUser(payload.user);
      UserStore.__emitChange();
      break;

    }
};

module.exports = UserStore;
