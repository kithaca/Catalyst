var React = require('react');
var Carousel = require('nuka-carousel');

var ProjectCarousel = React.createClass({
  mixins: [Carousel.ControllerMixin],

  render: function () {
    return (
      <Carousel
        decorators={Decorators}
        className="carousel"
        >
        <div className="slide1">
          <div className="slide-text">
            <h1 className="slide-header">Welcome to Catalyst!</h1>
            <h3 className="slide-subtitle">Discover, fund, and create research projects</h3>
          </div>
        </div>

        <div
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
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
