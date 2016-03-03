var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

var Category = React.createClass({
  mixins: [History],

  searchByCategory: function () {
    var that = this;
    ApiUtil.fetchSearchedProjects(that.props.info[0], function () {
      that.history.push("/");
    });
  },

  render: function () {
    return (
      <div className="button"
                  id="category"
             onClick={this.searchByCategory}>
        {this.props.info[0]}
        <br />
        {this.props.info[1]} projects
      </div>
    );
  }
});

module.exports = Category;
