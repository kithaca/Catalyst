var React = require('react');
var History = require('react-router').History;
var Link = require('react-router').Link;
var ProjectStore = require('../../stores/projectStore');
var ApiUtil = require('../../util/apiUtil');
var EventEmitter = require('../session/eventEmitter');
var CatalyzeModal = require('./catalyzeModal');
var SessionStore = require('../../stores/sessionStore');

var ProjectDetail = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { project: ProjectStore.find(parseInt(this.props.params.id)) };
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    // EventEmitter.subscribe("TOGGLE_CATALYZE", this.forceUpdate.bind(this));
    ApiUtil.fetchOneProject(this.props.params.id);
  },

  _onChange: function () {
    this.setState({ project: ProjectStore.find(parseInt(this.props.params.id)) });
  },

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  catalyzeModal: function () {
    if (Object.keys(SessionStore.currentUser()).length > 0) {
      EventEmitter.dispatch("TOGGLE_CATALYZE");
    } else {
      EventEmitter.dispatch("TOGGLE_LOGIN");
    }
  },

  render: function () {
    if (this.state.project === undefined) {
      return <div>Project does not exist :(</div>;
    }

    var currDate = new Date;
    var deadline = new Date(this.state.project.deadline);
    var diff = deadline - currDate;
    var closed = false;
    var daysLeft;
    if (diff < 0) {
      closed = true;
    } else {
      var daysLeft = Math.ceil(diff / 1000 / 60 / 60 / 24);
    }

    var ownProject =  false;
    if (SessionStore.currentUser().username && SessionStore.currentUser().username === this.state.project.creator) {
      ownProject = true;
    }

    var fulfilled = false;
    if (this.state.project.pledged >= this.state.project.goal_amt) {
      fulfilled = true;
    }

    return(
      <div className="project-detail">

        <div className="project-header">
          <h1>{this.state.project.title}: {this.state.project.tagline}</h1>
          <h3>{ownProject ? "You are the creator of this project." : "Creator: " + this.state.project.creator}</h3>
        </div>

        <div className="project-display">
          <div className="image-wrapper">
            <img src={this.state.project.image_url}
                 alt="project_image"
            className="project-pic" />
          </div>

          <div className="details">
            <h4>{this.state.project.description}</h4>
          </div>
        </div>

        <div className="sidebar">
          <h3>${this.state.project.pledged} pledged</h3>
          <h3>${this.state.project.goal_amt} goal</h3>
          <h3>{closed ? "This project is closed." : daysLeft + " day(s) left"}</h3>
          <h3>{fulfilled ? "This project has fulfilled its funding goal!" : ""}</h3>

          {!(ownProject || closed) ? (
            <div>
              <button
                onClick={this.catalyzeModal}
                className="button">
                Catalyze this project
              </button>
              <CatalyzeModal
                project={this.state.project}>
              </CatalyzeModal>
            </div>)

          : (
            <div>
              <button
                onClick={this.catalyzeModal}
                className="button" disabled>
                Catalyze this project
              </button>
            </div>) }

        </div>


      </div>

    );

  }

});

module.exports = ProjectDetail;
