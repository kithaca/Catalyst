var React = require('react');
var History = require('react-router').History;
var SessionStore = require('../stores/sessionStore');
var ApiUtil = require('../util/apiUtil');
var Login = require('./session/login');
var Navbar = require('./nav/navbar');
var ProjectIndex = require('./projects/projectIndex');


var App = React.createClass({

  mixins: [History],

  getInitialState: function () {
    var currentUser = SessionStore.currentUser();
    return { currentUser: currentUser, loggedIn: (Object.keys(currentUser) > 0),
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
    // this.setState({ showLoginForm: !this.state.showLoginForm })
    ApiUtil.fetchCurrentUser();
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
        <Navbar showLogin={this.showLogin}
              toggleLogin={this.toggleLogin}
                 loggedIn={this.loggedIn}
                   logOut={this.logUserOut}
                   />
        <div className="master-container">
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = App;

/*{this.props.children && React.cloneElement(this.props.children, {
            loggedIn: this.state.loggedIn})} */
