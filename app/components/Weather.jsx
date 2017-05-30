const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({

  handleSearch: function(location){
    // this.setState({
    //   location: location,
    //   temp: 21
    // });

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    var that = this;
    //debugger; // ini kyk breakpoint
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });

    });
  },
  getInitialState: function(){
    return ({
      isLoading: false,
      errorMessage: undefined
    });
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    console.log(newProps);
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
      // biar urlnya jadi localhost:3000/#/
    }
  },
  render: function(){
    // cara lain, pake fitur es6
    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage(){
      if(isLoading)
        return <h3 className="text-center">Fetching weather...</h3>;
      else if (temp && location)
        return   <WeatherMessage temperature={temp}
          location={location} />;
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (<ErrorModal message={errorMessage}/>);
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  },
  componentDidMount: function(){
    // ini ambil query string nya dari url
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
      // biar urlnya jadi localhost:3000/#/
    }
  }
});

module.exports = Weather;
