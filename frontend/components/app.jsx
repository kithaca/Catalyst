var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../util/apiUtil');
var Login = require('./session/login');
var Navbar = require('./nav/navbar');


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

  showLogin: function () {
    return this.state.showLoginForm;
  },

  loggedIn: function () {
    return this.state.loggedIn;
  },

  toggleLogin: function () {
    this.setState({ showLoginForm: !this.state.showLoginForm });
  },


  logUserOut: function () {
    var that = this;
    ApiUtil.logout(function () {
      that.history.pushState(null, "/", {});
    });
  },

  render: function () {

    return(
      <div className="app">
        <Navbar className="nav"
                showLogin={this.showLogin}
              toggleLogin={this.toggleLogin}
                 loggedIn={this.loggedIn}
              ensureLogin={this._userChange}
                   logOut={this.logUserOut}/>

        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
