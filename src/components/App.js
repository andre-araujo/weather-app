import React, { Component, Fragment } from 'react';

import { getImage } from '../services/imageAPI';
import { getWeatherByLocationName, getWeatherByLatLong } from '../services/yahooAPI';

import imageFactory from '../services/factories/imageFactory';
import weatherForecastFactory from '../services/factories/weatherForecastFactory';

import WeatherForecast from './modules/WeatherForecast';
import ImageBackground from './modules/ImageBackground';
import LocationInput from './modules/LocationInput';


class App extends Component {
  state={
    imageURL: '#',
    weather: null,
  }

  componentDidMount() {
    getImage()
      .then(resp => resp.json())
      .then(imageFactory)
      .then(({ imageURL }) => this.setState({ imageURL }));
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
