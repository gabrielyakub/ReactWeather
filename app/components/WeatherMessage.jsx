const React = require('react');

//
// var WeatherMessage = React.createClass({
//   render: function(){
//     return (
//       <p> It's {this.props.temperature} degree in {this.props.location}</p>
//     );
//   }
// });

// var WeatherMessage = (props) => (
//   <p> It's {props.temperature} degree in {props.location}</p>
// );

// kyk gini juga bisa, langsung di destructure di parameter
var WeatherMessage = ({temperature, location}) => {
  return (
    <h3 className="text-center"> It's {temperature} degree in {location}</h3>
  );
};




module.exports = WeatherMessage;
