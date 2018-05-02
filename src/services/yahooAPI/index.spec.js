import { getWeatherByLocationName, getWeatherByLatLong } from './index';

global.fetch = jest.fn(() => Promise.resolve({ status: 200 }));

beforeEach(() => {
  global.fetch.mockReset();
});

describe('yahooAPI', () => {
  describe('getWeatherByLocationName', () => {
    it('should call yahooAPI API get URL using location params', () => {
      getWeatherByLocationName('Rio de Janeiro');

      expect(global.fetch).toHaveBeenCalledWith('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Rio de Janeiro%22)&format=json&u=c&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
    });
  });

  describe('getWeatherByLatLong', () => {
    it('should call yahooAPI API get URL using location params', () => {
      getWeatherByLatLong(200, 200);

      expect(global.fetch).toHaveBeenCalledWith('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(200,200)")&format=json');
    });
  });
});
