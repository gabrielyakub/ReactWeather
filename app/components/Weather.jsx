const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  handleSearch: function(location){
    // this.setState({
    //   location: location,
    //   temp: 21
    // });



    var that = this;
    //debugger; // ini kyk breakpoint
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  getInitialState: function(){
    return ({
      isLoading: false
    });
  },
  render: function(){
    // cara lain, pake fitur es6
    var {isLoading, temp, location} = this.state;
    function renderMessage(){
      if(isLoading)
        return <h3>Fetching weather...</h3>;
      else if (temp && location)
        return   <WeatherMessage temperature={temp}
          location={location} />;
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
