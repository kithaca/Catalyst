var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NewProjectForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankForm: {
    title: "",
    category: "",
    tagline: "",
    goal: "",
    start: new Date(),
    deadline: "",
    description: ""
  },

  getInitialState: function () {
    return (this.blankForm);
  },

  createProject: function () {
    event.preventDefault();
    var project = {};
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      project[key] = that.state[key];
    });
    ApiUtil.newProject({project: project}, function () {
    });
  },

  render: function () {
    return(
          <div>
            Create New Project

            <form onSubmit={this.createProject}>

              <div>
                <input
                  type="text"
                  placeholder="Project title"
                  valueLink={this.linkState("title")}
                  />
              </div>

              <div>
                <label>
                  Category
                  <select>
                    <option valueLink={this.linkState("category")}>Biology</option>
                    <option valueLink={this.linkState("category")}>Chemistry</option>
                    <option valueLink={this.linkState("category")}>Engineering</option>
                    <option valueLink={this.linkState("category")}>Medicine</option>
                    <option valueLink={this.linkState("category")}>Physics</option>
                  </select>
                </label>
              </div>

              <div>
                <label>
                  Tagline
                  <textarea rows="5" cols="30"
                    type="tagline"
                    placeholder="Enter a 1 sentence summary of your project."
                    valueLink={this.linkState("tagline")}
                    />
                </label>
              </div>

              <div>
                <label>
                  Funding Goal
                  $<input
                    type="text"
                    valueLink={this.linkState("goal")}
                    />
                </label>
              </div>

              <div>
                <label>
                  Funding Deadline
                  <input
                         type="date"
                          min={new Date()}
                    valueLink={this.linkState("deadline")}
                    />
                </label>
              </div>

              <div>
                <textarea rows="10" cols="30"
                  placeholder="Enter a detailed description of your project."
                  valueLink={this.linkState("description")}
                />
              </div>

              <br></br>

              <button className="button">Create Project</button>

            </form>
          </div>
    );
  }

});


module.exports = NewProjectForm;
