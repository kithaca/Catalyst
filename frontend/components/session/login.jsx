var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var EventEmitter = require('./eventEmitter');

var Login = React.createClass({
  mixins: [LinkedStateMixin],

  blankForm: {
    username: "",
    password: "",
  },

  getInitialState: function () {
    return (this.blankForm);
  },

  renderSignup: function (event) {
    event.preventDefault();
    EventEmitter.dispatch("TOGGLE_LOGIN")
    EventEmitter.dispatch("TOGGLE_SIGNUP");
  },

  validateUser: function (user) {
    this.errors = {};
    if (user.username.length === 0) {
      this.errors.username = true; // need validation for existing user?
    }
    if (user.password.length === 0) {
      this.errors.password = true;
    }
    if (Object.keys(this.errors).length > 0) {
      return false;
    } else {
      return true;
    }
  },

  logInUser: function functionName(event) {
    event.preventDefault();
    var user = {};
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      user[key] = that.state[key];
    });

    if (that.validateUser(user)) {
      ApiUtil.login({user: user}, function () {
        that.props.toggleLogin();
        that.props.closeModal();
      });
    } else {
      that.forceUpdate();
    }
  },

  render: function () {
    if (this.errors === undefined) {
      this.errors = {};
    }
    return(
        <div>
          <h2 className="modal-header">Catalyst</h2>
          <div>
            <form onSubmit={this.logInUser}>
              <div>
                <input className="form-input"
                  type="text"
                  placeholder="Username"
                  valueLink={this.linkState("username")}
                  />
                {this.errors.username ? <h6 className="error">Please enter a username.</h6> : <p></p>}
              </div>

              <div>
                <input className="form-input"
                  type="password"
                  placeholder="Password"
                  valueLink={this.linkState("password")}
                  />
                {this.errors.password ? <h6 className="error">Please enter a password.</h6> : <p></p>}
              </div>

              <br></br>

              <button onClick={this.logInUser} className="auth-button">Log In</button>

              <div className="option-container">
                <div className="lazy-options">
                  <h5>Don't have an account?</h5>
                  <button onClick={this.renderSignup}
                        className="lazy-login-btn">>>Sign Up</button>
                </div>
                <br/>
                <div className="lazy-options">
                  <h5>Just exploring?</h5>
                  <button className="lazy-login-btn">>>Guest Login</button>
                </div>
              </div>

            </form>
          </div>
      </div>

    );
  }

});


module.exports = Login;
