var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../util/apiUtil');
var Login = require('./session/login');


var App = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { currentUser: SessionStore.currentUser(), loggedIn: false,
      showLoginForm: false };
  },

  componentDidMount: function () {
    this.currentUserListener = SessionStore.addListener(this._userChange);
    ApiUtil.fetchCurrentUser();
  },

  // loggedIn: function () {
  //
  // },

  _userChange: function () {
    this.setState({ currentUser: SessionStore.currentUser() });
    if (Object.keys(SessionStore.currentUser()).length > 0) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
    // this.history.push("/");
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  toggleLogin: function () {
    this.setState({ showLoginForm: true });
  },

  unToggleLogin: function () {
    this.setState({ showLoginForm: false });
  },

  logUserOut: function () {
    var that = this;
    ApiUtil.logout(function () {
      console.log("logging out");
      that.history.pushState(null, "/", {});
    });
  },

  // componentDidUpdate: function () {
  //   this.unToggleLogin();
  // },

  render: function () {


    var loginOrOut;
    var signUp;
    if (this.state.loggedIn) {
      loginOrOut = <div onClick={this.logUserOut}><Link to="logout">Log Out</Link></div>;
    } else {
      loginOrOut = <div onClick={this.toggleLogin}>Log In</div>;
      signUp = <Link to="signup">Create Account</Link>;
    }
    var show = "hidden";
    if (this.state.showLoginForm) {
      show = "session-form";
    }
    // debugger;
    return(
      <div className="app">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="current">Your Userpage</Link></li>
          <li>{loginOrOut}</li>
          <li>{signUp}</li>
        </ul>
        <div>
          <Login display={show} />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
