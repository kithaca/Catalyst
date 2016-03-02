var React = require('react');

var Searchbar = React.createClass({
  search: function () {
    console.log("search beginning");
  },

  render: function () {
    return(
      <form className="search-form" onSubmit={this.search}>
          <input className="form-input"
                        id="search"
                      type="text"
               placeholder="Search projects" />
      </form>
    );
  }
});


module.exports = Searchbar;
