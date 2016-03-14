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
      showLoginForm: false, loaded: false };
  },

  componentDidMount: function () {
    this.currentUserListener = SessionStore.addListener(this._userChange);
    ApiUtil.fetchCurrentUser();
  },

  _userChange: function () {
    this.setState({ currentUser: SessionStore.currentUser(), loaded: true });
    if (Object.keys(SessionStore.currentUser()).length > 0) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  componentDidUpdate() {
    var panel;
    var node;
    if (this.refs.selectedSection && this.refs.selectedItem) {
      // This is the container you want to scroll.
      panel = this.refs.listPanel;
      // This is the element you want to make visible w/i the container
      // Note: You can nest refs here if you want an item w/i the selected item
      node = ReactDOM.findDOMNode(this.refs.selectedItem);
    }

    if (panel && node &&
      (node.offsetTop > panel.scrollTop + panel.offsetHeight || node.offsetTop < panel.scrollTop)) {
      panel.scrollTop = node.offsetTop - panel.offsetTop;
    }
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
