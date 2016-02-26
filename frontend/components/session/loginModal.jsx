var React = require('react');
// var Modal = require('react-bootstrap').Modal;
var Boron = require('boron');
// var Button = require('react-bootstrap').Button;
var Login = require('./login');
// var Popover = require('react-popover');
// var Tooltip = require('rc-tooltip');

// var styles = {
  // btn: {
  //     margin: '1em auto',
  //     padding: '1em 2em',
  //     outline: 'none',
  //     fontSize: 16,
  //     fontWeight: '600',
  //     background: '#C94E50',
  //     color: '#FFFFFF',
  //     border: 'noneclassName "container" {
//       padding: '2em',
//       textAlign: 'center'
//   },
//   title: {
//     margin: 0,
//     color: '#C94E50',
//     fontWeight: 400
//   }
// };




var LoginModal = React.createClass({

    toggleDialog: function (ref) {

        return (function () {
          this.refs[ref].toggle();
        }.bind(this));
    },

    getContent: function (modalName) {
      return (
        <div className="container">
          <Login toggleLogin={this.props.toggleLogin}></Login>
          <button className="btn" onClick={this.toggleDialog(modalName)}>Close</button>
      </div>);
    },

    getTiggerAndModal: function(modalName){
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
              {that.getTiggerAndModal('OutlineModal')}
            </div>
        );
    }
});

module.exports = LoginModal;
