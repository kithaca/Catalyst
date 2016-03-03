var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var Searchbar = React.createClass({

  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return { query: "" };
  },

  search: function (e) {
    e.preventDefault();
    console.log("search beginning");
    var query = this.state.query;
    var that = this;
    if (query.length > 0) {
      ApiUtil.fetchSearchedProjects(query, function () {
        that.history.push("/");
      });
    }

  },

  render: function () {
    return(
      <form className="search-form" onSubmit={this.search}>
          <input className="form-input"
                        id="search"
                      type="text"
               placeholder="Search projects"
                 valueLink={this.linkState("query")} />
      </form>
    );
  }
});


module.exports = Searchbar;
