function weatherForecastFactory(resp = {}) {
  if (!resp.query) {
    return null;
  }

  const {
    item, units, location, atmosphere, wind,
  } = resp.query.results.channel;

  return ({
    data: [
      {
        day: 'Today',
        humidity: `${atmosphere.humidity}%`,
        pressure: atmosphere.pressure + units.pressure,
        temperature: item.condition.temp,
        weatherCode: item.condition.code,
        weather: item.condition.text,
        wind: wind.speed + units.speed,
      },
      {
        day: 'Tomorrow',
        temperature: (parseInt(item.forecast[0].high, 10) + parseInt(item.forecast[0].low, 10)) / 2,
        weatherCode: item.forecast[0].code,
        weather: item.forecast[0].text,
      },
      {
        day: 'After tomorrow',
        temperature: (parseInt(item.forecast[1].high, 10) + parseInt(item.forecast[1].low, 10)) / 2,
        weatherCode: item.forecast[1].code,
        weather: item.forecast[1].text,
      },
    ],
    location: {
      city: location.city,
      region: location.region,
    },
    units: {
      distance: units.distance,
      pressure: units.pressure,
      speed: units.speed,
      temperature: units.temperature,
    },
  });
}

export default weatherForecastFactory;
