var React = require('react');
var Boron = require('boron');
var Signup = require('./signup');
var EventEmitter = require('./eventEmitter');

var SignupModal = React.createClass({

    componentDidMount: function () {
      EventEmitter.subscribe("TOGGLE_SIGNUP", this.toggleDialog('OutlineModal').bind(this));
    },

    toggleDialog: function (ref) {
        return (function () {
          if (this.refs[ref]) {
            this.refs[ref].toggle();
          }
        }.bind(this));
    },

    getContent: function (modalName) {
      return (
        <div className="container">
          <Signup toggleLogin={this.props.toggleLogin}
                   closeModal={this.toggleDialog(modalName)}>
          </Signup>
      </div>);
    },

    getTriggerAndModal: function(modalName){
        var Modal = Boron[modalName];

        return (
          <div>
          <button
            onClick={this.toggleDialog(modalName)}
                 id="btn">
            <h3>Create Account</h3>
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

module.exports = SignupModal;
