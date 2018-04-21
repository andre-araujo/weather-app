import React from 'react';

import LocationDisplay from '../../elements/LocationDisplay';
import WeatherInfo from '../../elements/WeatherInfo';
import cx from './styles.css';

function WeatherForecast() {
  return (
    <section className={cx.container}>
      <LocationDisplay city="Rio de Janeiro" state="Rio de Janeiro" />
      <WeatherInfo
        day="Hoje"
        humidity="78%"
        pressure="1003hPA"
        temperature={32}
        weather="Ensolarado"
        wind="NO 6.4Km/h"
      />
    </section>
  );
}

export default WeatherForecast;
