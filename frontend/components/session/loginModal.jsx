var React = require('react');
var Boron = require('boron');
var Login = require('./login');
var EventEmitter = require('./eventEmitter');

var LoginModal = React.createClass({

  componentDidMount: function () {
    EventEmitter.subscribe("SHOW_LOGIN", this.toggleDialog('OutlineModal'));
  },

  toggleDialog: function (ref) {
    return (function () {
      this.refs[ref].toggle();
    }.bind(this));
  },

  getContent: function (modalName) {
    return (
      <div className="container">
        <Login toggleLogin={this.props.toggleLogin} closeModal={this.toggleDialog(modalName)}></Login>
        <button className="btn" onClick={this.toggleDialog(modalName)}>Close</button>
    </div>);
  },

  getTriggerAndModal: function(modalName){
    var Modal = Boron[modalName];

    return (
      <div>
      <button
        onClick={this.toggleDialog(modalName)}
             id="btn">
        <h3>Log In</h3>
      </button>

      <Modal ref={modalName}>{this.getContent(modalName)}</Modal>
      </div>
    );
  },

  render: function() {
    var that = this;
    return (
        <div className="container">
          {that.getTriggerAndModal('OutlineModal')}
        </div>
    );
  }
});

module.exports = LoginModal;
