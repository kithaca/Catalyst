var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var LoginModal = require('../session/loginModal');
var EventEmitter = require('../session/eventEmitter');
var UploadButton = require('../images/uploadButton');

var currentDate = function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  return (yyyy+ '-' + mm + '-' + dd);
};

var NewProjectForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankForm: function () {
    return {
      title: "",
      category: "",
      tagline: "",
      goal_amt: "",
      start_date: new Date(),
      deadline: currentDate(),
      description: "",
      image_url: ""
    };
  },

  errors: {},

  getInitialState: function () {
    return(this.blankForm());
  },

  validateProject: function (project) {
    debugger;
    this.errors = {};
    var that = this;
    Object.keys(project).forEach(function (key) {
      if (project[key] === "") {
        that.errors[key] = " can't be blank.";
      }
    });
    // if (project.deadline < project.start_date) {
    //   that.errors["deadline"] = "Deadline cannot be before start date.";
    // }
    if (Object.keys(that.errors).length === 0) {
      return true;
    } else {
      that.setState({errors: that.errors});
      return false;
    }
  },

  createProject: function () {
    event.preventDefault();
    var project = this.blankForm();
    var that = this;
    Object.keys(that.state).forEach(function (key) {
      project[key] = that.state[key];
    });

    if (that.validateProject(project)) {
      project["creator_name"] = SessionStore.currentUser().username;
      ApiUtil.createProject({project: project}, function (id) {
        that.props.history.pushState(null, "projects/" + id, {});
      });
    }
  },

  renderLogin: function () {
    EventEmitter.dispatch("TOGGLE_LOGIN");
  },

  setImageUrl: function (e) {
    var options = {
      cloud_name: window.CLOUDINARY_OPTIONS.cloud_name,
      upload_preset: window.CLOUDINARY_OPTIONS.upload_preset,
      theme: "minimal",
      multiple: false,
      cropping: 'server',
      cropping_aspect_ratio: 4/3,
    };
    debugger;
    e.preventDefault();
    var callback = function (error,results) {
      if(!error) {
        this.setState({ image_url: results[0].url });
      }
    }.bind(this);

    window.cloudinary.openUploadWidget(options, callback);
  },

  render: function () {
    var loggedIn;
    if (Object.keys(SessionStore.currentUser()).length > 0) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    return(
          <div className="form group">
            <h1 className="form-title">Create New Project</h1>

            <div className="form-items">

              <div>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Project title"
                    valueLink={this.linkState("title")}
                    />
                <p className="error">{this.errors.title ? "Title " + this.errors.title : ""}</p>
              </div>

              <div>
                  <select
                    className="dropdown"
                    valueLink={this.linkState("category")}>
                    <option value="">Select a category...</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Physics">Physics</option>
                  </select>
                <p className="error">{this.errors.category ? "Category " + this.errors.category : ""}</p>
              </div>

              <div>
                <label>
                  Tagline
                  <br />
                  <textarea rows="3" cols="40"
                    className="form-input"
                    placeholder="Enter a 1 sentence summary of your project."
                    valueLink={this.linkState("tagline")}
                    />
                </label>
                <p className="error">{this.errors.tagline ? "Tagline " + this.errors.tagline : ""}</p>
              </div>

              <div>
                <label>
                  Funding Goal
                  <br />
                  $<input
                    type="text"
                    className="form-input"
                    valueLink={this.linkState("goal_amt")}
                    />
                </label>
                <p className="error">{this.errors.goal_amt ? "Goal " + this.errors.goal_amt : ""}</p>
              </div>

              <div>
                <label>
                  Funding Deadline
                  <br />
                  <input
                        className="form-input"
                         type="date"
                          min={new Date()}
                          placeholder={currentDate()}
                    valueLink={this.linkState("deadline")}
                    />
                </label>
                <p className="error">{this.errors.deadline ? this.errors.deadline : ""}</p>
              </div>

              <div>
                <label>
                  Description
                  <br />
                  <textarea rows="7" cols="40"
                    className="form-input"
                    placeholder="Enter a detailed description of your project."
                    valueLink={this.linkState("description")}
                  />
              </label>
              <p className="error">{this.errors.description ? "Description " + this.errors.description : ""}</p>
              </div>

              <br />

              <div>
                <label>
                  Upload a photo
                  <br />
                  <button onClick={this.setImageUrl}/>
                </label>
              </div>

              <button onClick={loggedIn ? this.createProject : this.renderLogin}
                    className="button">Create Project</button>

            </div>
          </div>
    );
  }

});


module.exports = NewProjectForm;
