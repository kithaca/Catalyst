var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NewProjectForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankForm: {
    title: "",
    creator_id: SessionStore.currentUser().id,
    category: "",
    tagline: "",
    goal_amt: "",
    start_date: new Date(),
    deadline: "",
    description: ""
  },

  errors: [],

  getInitialState: function () {
    return ({project: this.blankForm, errors: this.errors});
  },

  validateProject: function (project) {
    this.errors = [];
    var that = this;
    Object.keys(project).forEach(function (key) {
      if (project[key] === "") {
        that.errors.push("Field " + key + " can't be blank.");
      }
    });
    if (project.deadline < project.start_date) {
      that.errors.push("Deadline cannot be before start date.");
    }
    if (that.errors.length === 0) {
      return true;
    } else {
      that.errors = that.errors.join("\n");
      that.setState({errors: that.errors});
      debugger;
      return false;
    }
  },

  createProject: function () {
    event.preventDefault();
    var project = {};
    var that = this;
    Object.keys(that.state.project).forEach(function (key) {
      project[key] = that.state.project[key];
    });
    if (this.validateProject(project)) {
      ApiUtil.createProject({project: project});
    }
  },

  render: function () {
    debugger;
    return(

          <div>
            <h1>Create New Project</h1>

            <div>
              {this.state.errors.length > 0 ? <h5>{this.state.errors}</h5> : <p></p> }
            </div>

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
                    valueLink={this.linkState("goal_amt")}
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
