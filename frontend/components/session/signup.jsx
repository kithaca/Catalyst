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
      <form className="new-user" onSubmit={this.createUser}>
        <div>
          <label>
            Username
            <input
              type="text"
              valueLink={this.linkState("username")}
              />
          </label>
        </div>

        <br></br>

        <div>
          <label>
            Email
            <input
              type="email"
              valueLink={this.linkState("email")}
              />
          </label>
        </div>

        <br />

        <div>
          <label>
            Password
            <input
              type="password"
              valueLink={this.linkState("password")}
              />
          </label>
        </div>


        <br></br>

        <button className="signup-button">Create Account</button>

      </form>


    );
  }

});


module.exports = Signup;
