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
    var query = this.state.query;
    var that = this;
    if (query.length > 0) {
      that.history.pushState(null, "/", {query: query});
      ApiUtil.fetchSearchedProjects(query);
    }

  },

  render: function () {
    return(
      <form className="search-form" onSubmit={this.search}>
        <div id="search-logo"
             onClick={this.search}>
          🔍
        </div>
          	<input className="form-input"
                        id="search"
                      type="text"
               placeholder="Search titles, categories, descriptions, etc."
                 valueLink={this.linkState("query")} />
      </form>
    );
  }
});


module.exports = Searchbar;
