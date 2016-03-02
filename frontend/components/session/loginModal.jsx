var React = require('react');
var Boron = require('boron');
var Login = require('./login');
var EventEmitter = require('./eventEmitter');

var LoginModal = React.createClass({

  componentDidMount: function () {
    EventEmitter.subscribe("TOGGLE_LOGIN", this.toggleDialog('OutlineModal').bind(this));
  },

  toggleDialog: function (ref) {
    return (
      function () {
        if (this.refs[ref]) {
          this.refs[ref].toggle();
        }
    }.bind(this));
  },

  getContent: function (modalName) {
    return (
      <div className="container">
        <Login toggleLogin={this.props.toggleLogin} closeModal={this.toggleDialog(modalName)}></Login>
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

/* Close modal button: <button className="close-X" onClick={this.toggleDialog(modalName)}>X</button> */
