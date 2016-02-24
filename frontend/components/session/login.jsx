var React = require('react');
var sessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

var Login = React.createClass({
  // mixins: [History],
  //
  // getInitialState: function () {
  //   return { currentUser: sessionStore.currentUser() };
  // },
  //
  // componentDidMount: function () {
  //   this.currentUserListener = sessionStore.addListener(this._userChange);
  //   ApiUtil.fetchCurrentUser();
  // },
  //
  // _userChange: function () {
  //   this.setState({ currentUser: sessionStore.currentUser() });
  // },
  //
  // componentWillUnmount: function () {
  //   this.currentUserListener.remove();
  // },

  render: function () {
    return <div>Login</div>;
  }

});


module.exports = Login;
