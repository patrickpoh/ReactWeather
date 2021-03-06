var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//         <div>
//           <h3>It is {temp} at {location}. </h3>
//         </div>
//     );
//   }
// });
var WeatherMessage = ({temp, location}) => {
  return (
      <div>
        <h1 className="text-center">It is {temp} at {location}. </h1>
      </div>
  );
};

module.exports = WeatherMessage;
