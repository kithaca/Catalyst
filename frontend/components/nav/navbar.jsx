var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var Login = require('../session/login');

var Navbar = React.createClass({

  mixins: [History],

  render: function () {
    var show = "hidden";
    if (this.props.showLogin()) {
      show = "session-form";
    }

    var logInOrOut;
    var signUp;
    if (this.props.loggedIn()) {
      logInOrOut = <div onClick={this.props.logOut}>Log Out</div>;
    } else {
      logInOrOut = <Login disp={show}
                   toggleLogin={this.props.toggleLogin}/>;
      signUp = <Link to="signup">Create Account</Link>;

    }

    return(
      <div className="header">
        <ul className="nav group">
          <li className="nav-item"><Link to="/">Catalyst</Link></li>
          <li className="nav-item"><Link to="current">Your Userpage</Link></li>
          <li className="nav-item">{logInOrOut}</li>
          <li className="nav-item">{signUp}</li>
        </ul>
      </div>
    );
  }

});

module.exports = Navbar;
