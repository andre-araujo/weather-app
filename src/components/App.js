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
    if (locationName.length === 0) {
      this.setState({ error: 'Empty location' });
      return;
    }

    getWeatherByLocationName(locationName)
      .then(resp => resp.json())
      .then((resp) => {
        if (!resp.query || !resp.query.results) { throw new Error('Invalid location'); }
        return resp;
      })
      .then(weatherForecastFactory)
      .then(weather => this.setState({ weather, error: null }))
      .catch(fetchError => this.setState({ error: fetchError.message }));
  }

  getWeatherByLatLong = ({ latitude, longitude, error }) => {
    if (error) {
      this.setState({ error: error.message });
      return;
    }

    getWeatherByLatLong(latitude, longitude)
      .then(resp => resp.json())
      .then(weatherForecastFactory)
      .then(weather => this.setState({ weather, error: null }))
      .catch(fetchError => this.setState({ error: fetchError.message }));
  }

  render() {
    const { imageURL, weather, error } = this.state;

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
            error={error}
            onGetCoords={this.getWeatherByLatLong}
            onSearch={this.getWeatherByLocationName}
          />
        }
      </Fragment>
    );
  }
}

export default App;
