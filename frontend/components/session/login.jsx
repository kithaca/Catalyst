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
          <h2 className="modal-header">Catalyst</h2>
          <div>
            <form onSubmit={this.logInUser}>
              <div>
                <input className="form-input"
                  type="text"
                  placeholder="Username"
                  valueLink={this.linkState("username")}
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

              <button onClick={this.logInUser} className="auth-button">Log In</button>

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
      </div>

    );
  }

});


module.exports = Login;
