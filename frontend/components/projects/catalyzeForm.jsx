var React = require('react');
var ApiUtil = require('../../util/apiUtil');


var CatalyzeForm = React.createClass({

  updateProject: function (e) {
    e.preventDefault();
    ApiUtil.createProjectBacking(this.props.project);
    // ApiUtil.updateUser
  },

  render: function () {
    return(
      <div>
        <h2 className="modal-header">Catalyze this project!</h2>
        <form className="catalyze" onSubmit={this.updateProject}>
          $<input className="form-input"
            type="text"
            placeholder="Contribution amount"
            />

          <button className="button">
            Contribute
          </button>

        </form>
      </div>
      );
  }

});

module.exports = CatalyzeForm;
