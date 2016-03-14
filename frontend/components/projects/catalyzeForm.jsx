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
  },

  render: function () {
    return(
      <div>
        <form className="catalyze" onSubmit={this.updateProject}>
        <h2 className="catalyze-header">Catalyze this project!</h2>
          $ <input className="form-input catalyze-input"
            type="text"
            placeholder="Contribution amount"
            valueLink={this.linkState("pledge_amt")}
            />
          <button className="button catalyze-button">
            Contribute
          </button>

        </form>
      </div>
      );
  }

});

module.exports = CatalyzeForm;
