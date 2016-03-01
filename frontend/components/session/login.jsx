var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Login = React.createClass({
  mixins: [LinkedStateMixin],

  blankForm: {
    username: "",
    password: "",
  },

  getInitialState: function () {
    return (this.blankForm);
  },

  logInUser: function functionName(event) {
    event.preventDefault();
    var user = {};
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      user[key] = that.state[key];
    });
    ApiUtil.login({user: user}, function () {
      that.props.toggleLogin();
      that.props.closeModal();
    });
  },

  render: function () {
    return(
        <div>
          Log In
          <div>
            <form className="login-user" onSubmit={this.logInUser}>
              <div>
                <label>
                  Username
                  <input
                    type="text"
                    valueLink={this.linkState("username")}
                    />
                </label>
              </div>

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

              <button className="login-button">Log In</button>

            </form>
          </div>
      </div>

    );
  }

});


module.exports = Login;
