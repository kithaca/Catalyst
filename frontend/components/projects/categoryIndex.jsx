var React = require('react');
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;

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
      return <div>No cats here :(</div>;
    }
    var that = this;
    return (
      <div>
        {Object.keys(that.state.categories).map(function (category) {
          return (<button to="/" className="category">
          {category}
          {that.state.categories[category]}
        </button>);
        })}
      </div>
    );
  }

});

module.exports = CategoryIndex;
