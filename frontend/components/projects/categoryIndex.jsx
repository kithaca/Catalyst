var React = require('react');
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;
var Category = require('./category');

var CategoryIndex = React.createClass({

  getInitialState: function () {
    return { categories: ProjectStore.categories() };
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchAllProjects();
  },

  _onChange: function () {
    this.setState({ categories: ProjectStore.categories() });
  },

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  render: function () {
    if (Object.keys(this.state.categories).length === 0) {
      return <div>Categories could not be loaded. :(</div>;
    }

    var categories = ["Biology", "Chemistry", "Engineering", "Medicine", "Physics"];
    var that = this;
    return (
      <div>

      <div className="category-list group">
        {categories.map(function (category) {
          var categoryProps = [category, that.state.categories[category]];
          return (
            <Category info={categoryProps} />
          );
        })}
      </div>
    </div>
    );
  }

});

module.exports = CategoryIndex;
