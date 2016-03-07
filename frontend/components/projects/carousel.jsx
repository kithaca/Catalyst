var React = require('react');
var Carousel = require('nuka-carousel');

var ProjectCarousel = React.createClass({
  mixins: [Carousel.ControllerMixin],

  // slidesToScroll: React.PropTypes.oneOfType([
  //   React.PropTypes.number,
  //   React.PropTypes.oneOf(['auto'])
  // ]),
  //
  // speed: React.PropTypes.number(
  //   200
  // ),

  render: function () {
    return (
      <Carousel
        decorators={Decorators}
        className="carousel"
        >
        <div className="slide slide1">
          <div className="slide-text-1">
            <h1 className="slide-header">Welcome to Catalyst!</h1>
            <h3 className="slide-subtitle">Discover, fund, and create research projects</h3>
          </div>
        </div>

        <div className="slide slide2">
          <div className="slide-text-2">
            <h1 className="slide-header">Sponsor research in 5 different fields:</h1>
            <ul>
              <li className="cats">Biology</li>
              <li className="cats">Chemistry</li>
              <li className="cats">Engineering</li>
              <li className="cats">Medicine</li>
              <li className="cats">Physics</li>
            </ul>
          </div>
        </div>

        <div className="slide slide3">
          <div className="slide-text-3">
            <h1 className="slide-header">Launch your own project!</h1>
            <h3 className="slide-subtitle">Click "New Project" to get started</h3>
          </div>
        </div>


      </Carousel>
    );
  }
});

var Decorators = [{
  component: React.createClass({
    render: function () {
      return (
        <button
          onClick={this.props.previousSlide}>
          &lt;
        </button>
      );
    }
  }),
  position: 'CenterLeft',
},

{
  component: React.createClass({
    render: function () {
      return (
        <button
          onClick={this.props.nextSlide}>
          &gt;
        </button>
      );
    }
  }),
  position: 'CenterRight'
}];

// var RightButton = [{
//   component: React.createClass({
//     render: function () {
//       return (
//         <button
//           onClick={this.props.nextSlide}>
//           Previous Slide
//         </button>
//       );
//     }
//   }),
//   position: 'CenterLeft',
//   style: {
//     padding: 20
//   }
// }];

module.exports = ProjectCarousel;
