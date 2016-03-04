var React = require('react');
var Boron = require('boron');
var EventEmitter = require('../session/eventEmitter');
var CatalyzeForm = require('./catalyzeForm');

var CatalyzeModal = React.createClass({

    componentDidMount: function () {
      EventEmitter.subscribe("TOGGLE_CATALYZE", this.toggleDialog('OutlineModal').bind(this));
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
          <CatalyzeForm
            closeModal={this.toggleDialog.bind(this, modalName)}
                  test="test"
               project={this.props.project}>
          </CatalyzeForm>
      </div>);
    },

    getTriggerAndModal: function(modalName){
        var Modal = Boron[modalName];

        return (
          <div>
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

module.exports = CatalyzeModal;
