var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var Login = require('../session/login');
var LoginModal = require('../session/loginModal');
var SignupModal = require('../session/signupModal');
var Searchbar = require ('./searchbar');

var Navbar = React.createClass({

  mixins: [History],

  goHome: function functionName() {
    window.location = "/";
  },

  goToCategories: function () {
    this.history.pushState(null, "categories", {});
  },

  goToNewProject: function () {
    this.history.pushState(null, "new-project", {});
  },

  goToProfile: function () {
    this.history.pushState(null, "profile", {});
  },

  render: function () {
    var showLogin = "hidden";
    if (this.props.showLogin()) {
      showLogin = "session-form";
    }

    var logInOrOut;
    var signUp;
    var loggedIn = false;
    var profile;
    if (this.props.loggedIn()) {
      logInOrOut = <li className="nav-item" id="nav-right" onClick={this.props.logOut}>Log Out</li>;
      loggedIn = true;
      profile = <li className="nav-item" id="nav-right" onClick={this.goToProfile}>Profile</li>;
    } else {
      logInOrOut =
      <li className="nav-item" id="nav-right">
        <LoginModal toggleLogin={this.props.toggleLogin}>Log In</LoginModal>
      </li>;
      signUp = <li className="nav-item" id="nav-right"><SignupModal /></li>;
    }

    var displayProfile = loggedIn ? true : false;
    var displaySignUp = loggedIn ? false : true;
    return(
      <div className="header group">
        <ul className="nav">
          <li onClick={this.goHome} className="nav-item" id="logo">
            Catalyst
          </li>

          <li onClick={this.goToCategories} className="nav-item">
            Categories
          </li>

          <li onClick={this.goToNewProject} className="nav-item">
            New Project
          </li>

          <Searchbar />

          {displaySignUp ? signUp : null}
          {displayProfile ? profile : null}

          {logInOrOut}
        </ul>
      </div>
    );
  }

});

module.exports = Navbar;
