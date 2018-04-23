import React, { Component, Fragment } from 'react';
import WeatherForecast from './modules/WeatherForecast';
import ImageBackground from './modules/ImageBackground';
import LocationInput from './modules/LocationInput';
import { getWeatherByLocationName, getWeatherByLatLong } from '../services/yahooAPI';
import weatherForecastFactory from '../services/factories/weatherForecastFactory';

class App extends Component {
  state={
    imageURL: 'https://www.bing.com/az/hprichbg/rb/VikingHouse_PT-BR10853372693_1920x1080.jpg',
    weather: null,
  }

  getWeatherByLocationName = (locationName) => {
    getWeatherByLocationName(locationName)
      .then(resp => resp.json())
      .then(weatherForecastFactory)
      .then(weather => this.setState({ weather }));
  }

  getWeatherByLatLong = ({ latitude, longitude }) => {
    getWeatherByLatLong(latitude, longitude)
      .then(resp => resp.json())
      .then(weatherForecastFactory)
      .then(weather => this.setState({ weather }));
  }

  render() {
    const { imageURL, weather } = this.state;

    return (
      <Fragment>
        <ImageBackground imageURL={imageURL}>
          {
            weather &&
            <WeatherForecast weather={weather} />
          }
        </ImageBackground>
        {
          !weather &&
          <LocationInput
            onGetCoords={this.getWeatherByLatLong}
            onSearch={this.getWeatherByLocationName}
          />
        }
      </Fragment>
    );
  }
}

export default App;
