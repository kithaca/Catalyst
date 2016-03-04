var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var SessionStore = require('../../stores/sessionStore');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var EventEmitter = require('../session/eventEmitter');


var CatalyzeForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {pledge_amt: ""};
  },

  updateProject: function (e) {
    // debugger;
    e.preventDefault();
    var projectBacking = {
      backer_username: SessionStore.currentUser().username,
      project_id: this.props.project.id,
      pledge_amt: parseInt(this.state.pledge_amt)
    };

    var that = this;
    if (projectBacking.pledge_amt !== "" && projectBacking.pledge_amt > 0) {
      ApiUtil.createProjectBacking({project_backing: projectBacking}, function () {
        EventEmitter.dispatch("TOGGLE_CATALYZE");
      });
    }
    // ApiUtil.updateUser
  },

  render: function () {
    return(
      <div>
        <h2 className="modal-header">Catalyze this project!</h2>
        <form className="catalyze" onSubmit={this.updateProject}>
          $ <input className="form-input"
            type="text"
            placeholder="Contribution amount"
            valueLink={this.linkState("pledge_amt")}
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
