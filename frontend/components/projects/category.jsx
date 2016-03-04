var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

var Category = React.createClass({
  mixins: [History],

  searchByCategory: function () {
    var that = this;
    ApiUtil.fetchProjectsByCategory(that.props.info[0], function () {
      that.history.push("/");
    });
  },

  render: function () {
    return (
      <div className="category"
                  id={this.props.info}
             onClick={this.searchByCategory}>
        <h3 className="category-name">{this.props.info}</h3>
        <br />
      </div>
    );
  }
});

module.exports = Category;


//<h3 className="category-info">{this.props.info[1]} projects</h3>
