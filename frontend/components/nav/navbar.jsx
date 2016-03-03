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
      logInOrOut = <div onClick={this.props.logOut}>Log Out</div>;
      loggedIn = true;
      profile = <Link to="profile">Profile</Link>;
    } else {
      logInOrOut = <LoginModal
                   toggleLogin={this.props.toggleLogin}/>;
          signUp = <SignupModal />;
    }

    var displayProfile = loggedIn ? true : false;
    var displaySignUp = loggedIn ? false : true;
    return(
      <div className="header group">
        <ul className="nav">
          <div onClick={this.goHome} className="nav-item" id="logo">
            Catalyst
          </div>

          <Link to="categories" className="nav-item">
            Categories
          </Link>

          <Link to="new-project" className="nav-item">
            New Project
          </Link>

          <Searchbar />

          {displaySignUp ? <li className="nav-item auth">{signUp}</li> : <p></p>}
          {displayProfile ? <li className="nav-item auth" id="profile">{profile}</li> : <p></p>}

          <li className="nav-item auth">{logInOrOut}</li>
        </ul>
      </div>
    );
  }

});

module.exports = Navbar;
