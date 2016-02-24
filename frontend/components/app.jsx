var History = require('react-router').History;
var Link = require('react-router').Link;
var Login = require('./session/login');


var App = React.createClass({
  render: function () {
    return(
      <div className="app">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="current">Your Userpage</Link></li>
        </ul>
        <Login />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
