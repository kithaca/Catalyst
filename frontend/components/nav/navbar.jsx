var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;

var Navbar = React.createClass({

  mixins: [History],



  render: function () {

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="current">Your Userpage</Link></li>
      <li>{loginOrOut}</li>
      <li>{signUp}</li>
    </ul>
  }

});

module.exports = Navbar;
