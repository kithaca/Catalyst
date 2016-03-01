var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

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

  createUser: function (event) {
    event.preventDefault();
    var user = {};
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      user[key] = that.state[key];
    });
    ApiUtil.createUser({user: user}, function () {});
    that.setState(that.blankForm);
  },

  render: function () {
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
          </div>

          <div>
            <input className="form-input"
              type="email"
              placeholder="Email"
              valueLink={this.linkState("email")}
              />
          </div>

          <div>
            <input className="form-input"
              type="password"
              placeholder="Password"
              valueLink={this.linkState("password")}
              />
          </div>


          <br></br>

          <button className="auth-button signup-btn">Create Account</button>

          <div className="option-container">
            <div className="lazy-options">
              <h5>Don't have an account?</h5>
              <button className="lazy-login-btn">>>Sign Up</button>
            </div>
            <br/>
            <div className="lazy-options">
              <h5>Just exploring?</h5>
              <button className="lazy-login-btn">>>Guest Login</button>
            </div>
          </div>

        </form>
      </div>


    );
  }

});


module.exports = Signup;
