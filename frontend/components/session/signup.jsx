var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var EventEmitter = require('./eventEmitter');

var Signup = React.createClass({
  mixins: [History, LinkedStateMixin],

  blankForm: {
    username: "",
    email: "",
    password: "",
  },

  getInitialState: function () {
    return (this.blankForm);
  },

  renderLogin: function (event) {
    event.preventDefault();
    EventEmitter.dispatch("TOGGLE_SIGNUP")
    EventEmitter.dispatch("TOGGLE_LOGIN");
  },

  validateUser: function (user) {
    this.errors = {};
    if (user.username.length === 0) {
      this.errors.username = true; // need validation for existing user?
    }
    if (user.password.length < 6) {
      this.errors.password = true;
    }
    if (user.email.length === 0) {
      this.errors.email = true;
    }
    if (Object.keys(this.errors).length > 0) {
      return false;
    } else {
      return true;
    }
  },

  createUser: function (event) {
    event.preventDefault();
    var user = {};
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      user[key] = that.state[key];
    });

    if (that.validateUser(user)) {
      ApiUtil.createUser({user: user}, function () {});
      that.setState(that.blankForm);

    } else {
      that.forceUpdate();
    }
  },

  render: function () {

    if (this.errors === undefined) {
      this.errors = {};
    }
    // debugger;

    return(
      <div>
        <div>
          <h2 className="modal-header">Catalyst</h2>
        </div>
        <form className="new-user" onSubmit={this.createUser}>
          <div>
            <input className="form-input"
              type="text"
              placeholder="Username"
              valueLink={this.linkState("username")}
              />
            {this.errors.username ? <h6 className="error">Username can't be blank.</h6> : <p></p>}

          </div>

          <div>
            <input className="form-input"
              type="email"
              placeholder="Email"
              valueLink={this.linkState("email")}
              />
            {this.errors.email ? <h6 className="error">Email can't be blank.</h6> : <p></p>}
          </div>

          <div>
            <input className="form-input"
              type="password"
              placeholder="Password"
              valueLink={this.linkState("password")}
              />
            {this.errors.password ? <h6 className="error">Password must be at least 6 characters.</h6> : <p></p>}
          </div>


          <br></br>

          <button className="auth-button signup-btn">Create Account</button>
        </form>

          <div className="option-container">
            <div className="lazy-options">
              <h5>Already have an account?</h5>
              <button onClick={this.renderLogin}
                    className="lazy-login-btn">>>Log In</button>
            </div>
            <br/>
            <div className="lazy-options">
              <h5>Just exploring?</h5>
              <button className="lazy-login-btn">>>Guest Login</button>
            </div>
          </div>

      </div>


    );
  }

});


module.exports = Signup;
