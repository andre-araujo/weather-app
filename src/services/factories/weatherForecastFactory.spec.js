
import weatherForecastFactory from './weatherForecastFactory';

const raw = {
  query: {
    count: 1,
    created: '2018-05-02T22:59:05Z',
    lang: 'pt-BR',
    results: {
      channel: {
        units: {
          distance: 'mi',
          pressure: 'in',
          speed: 'mph',
          temperature: 'F',
        },
        title: 'Yahoo! Weather - Rio de Janeiro, BR',
        description: 'Yahoo! Weather for Rio de Janeiro, BR',
        language: 'en-us',
        lastBuildDate: 'Wed, 02 May 2018 07:59 PM BRT',
        ttl: '60',
        location: {
          city: 'Rio de Janeiro',
          country: 'Brazil',
          region: ' BR',
        },
        wind: {
          chill: '72',
          direction: '135',
          speed: '4',
        },
        atmosphere: {
          humidity: '80',
          pressure: '959.0',
          rising: '0',
          visibility: '16.1',
        },
        astronomy: {
          sunrise: '6:10 am',
          sunset: '5:27 pm',
        },
        image: {
          title: 'Yahoo! Weather',
          width: '142',
          height: '18',
          link: 'http://weather.yahoo.com',
          url: 'http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif',
        },
        item: {
          title: 'Conditions for Rio de Janeiro, BR at 07:00 PM BRT',
          lat: '-22.0672',
          long: '-42.9212',
          link: 'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2344862/',
          pubDate: 'Wed, 02 May 2018 07:00 PM BRT',
          condition: {
            code: '29',
            date: 'Wed, 02 May 2018 07:00 PM BRT',
            temp: '71',
            text: 'Partly Cloudy',
          },
          forecast: [
            {
              code: '34',
              date: '02 May 2018',
              day: 'Wed',
              high: '79',
              low: '61',
              text: 'Mostly Sunny',
            },
            {
              code: '30',
              date: '03 May 2018',
              day: 'Thu',
              high: '78',
              low: '65',
              text: 'Partly Cloudy',
            },
          ],
        },
      },
    },
  },
};

const converted = {
  data: [
    {
      day: 'Today',
      humidity: '80%',
      pressure: '959.0in',
      temperature: '71',
      weatherCode: '29',
      weather: 'Partly Cloudy',
      wind: '4mph',
    },
    {
      day: 'Tomorrow',
      temperature: 70,
      weatherCode: '34',
      weather: 'Mostly Sunny',
    },
    {
      day: 'After tomorrow',
      temperature: 71.5,
      weatherCode: '30',
      weather: 'Partly Cloudy',
    },
  ],
  location: {
    city: 'Rio de Janeiro',
    region: ' BR',
  },
  units: {
    distance: 'mi',
    pressure: 'in',
    speed: 'mph',
    temperature: 'F',
  },
};

describe('weatherForecastFactory', () => {
  it('should normalize weather forecast API response', () => {
    expect(weatherForecastFactory(raw)).toEqual(converted);
  });

  it('should not break if it receives undefined', () => {
    expect(weatherForecastFactory()).toEqual(null);
  });

  it('should return null if query does not exist into response object', () => {
    expect(weatherForecastFactory({})).toEqual(null);
  });
});
