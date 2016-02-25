var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

var CurrentUser = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { currentUser: SessionStore.currentUser() };
  },

  componentDidMount: function () {
    this.currentUserListener = SessionStore.addListener(this._userChange);
    ApiUtil.fetchCurrentUser();
  },

  _userChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
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
