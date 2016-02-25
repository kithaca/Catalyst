var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../util/apiUtil');


var App = React.createClass({

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
    this.history.push("/");
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  logUserOut: function () {
    var that = this;
    ApiUtil.logout(function () {
      that.history.pushState(null, "/", {});
    });
  },

  render: function () {
    var loginOrOut;
    var signUp;
    if (this.state.currentUser) {
      loginOrOut = <div onClick={this.logUserOut}><Link to="logout">Logout</Link></div>;
    } else {
      loginOrOut = <Link to="login">Login</Link>;
      signUp = <Link to="signup">Create Account</Link>;
    }

    return(
      <div className="app">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="current">Your Userpage</Link></li>
          <li>{loginOrOut}</li>
          <li>{signUp}</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
