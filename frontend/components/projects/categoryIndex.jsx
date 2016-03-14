var React = require('react');
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;
var Category = require('./category');

var CategoryIndex = React.createClass({

  getInitialState: function () {
    return { loaded: true };
  },

  render: function () {

    var categories = ["Biology", "Chemistry", "Engineering", "Medicine", "Physics"];
    var that = this;
    return (
      <div>
        <div className="category-list group">
          {categories.map(function (category) {
            return (
              <Category info={category} />
            );
          })}
        </div>
    </div>
    );
  }

});

module.exports = CategoryIndex;
