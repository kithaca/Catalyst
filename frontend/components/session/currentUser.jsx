var React = require('react');
var sessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

var CurrentUser = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { currentUser: sessionStore.currentUser() };
  },

  componentDidMount: function () {
    this.currentUserListener = sessionStore.addListener(this._userChange);
    ApiUtil.fetchCurrentUser();
  },

  _userChange: function () {
    this.setState({ currentUser: sessionStore.currentUser() });
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  render: function () {
    if (this.state.currentUser) {
      return (
        <div>
          <h1>Welcome, {this.state.currentUser.username}!</h1>
        </div>
      );
    } else {
      return (
        <div>You must be logged in to view userpage.</div>
      );
    }
  }

});

module.exports = CurrentUser;
