var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var SessionStore = new Store(AppDispatcher);
var UserConstants = require('../constants/userConstants');

var _currentUser = {};

var updateCurrentUser = function (currentUser) {
  _currentUser = currentUser;
};

var clearSession = function functionName() {
  _currentUser = {};
};

SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {

    case UserConstants.CURRENT_USER:
      updateCurrentUser(payload.currentUser);
      SessionStore.__emitChange();
      break;



    case UserConstants.CLEAR_SESSION:
      debugger;
      clearSession();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
