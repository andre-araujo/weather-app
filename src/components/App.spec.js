import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import LocationInput from './modules/LocationInput';

jest.mock('../services/factories/imageFactory', val => val);
jest.mock('../services/factories/weatherForecastFactory', val => val);

jest.mock('../services/imageAPI');
jest.mock('../services/yahooAPI');

const { getImage } = require('../services/imageAPI');
const { getWeatherByLocationName, getWeatherByLatLong } = require('../services/yahooAPI');

const fetchMock = () => Promise.resolve({
  json: () => ({}),
});

const getImageImp = jest.fn(fetchMock);
const getWeatherByLocationNameImp = jest.fn(fetchMock);
const getWeatherByLatLongImp = jest.fn(fetchMock);

beforeEach(() => {
  getImageImp.mockClear();
  getWeatherByLocationNameImp.mockClear();
  getWeatherByLatLongImp.mockClear();

  getImage.mockImplementation(getImageImp);
  getWeatherByLocationName.mockImplementation(getWeatherByLocationNameImp);
  getWeatherByLatLong.mockImplementation(getWeatherByLatLongImp);
});

describe('App component', () => {
  it('should match snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('should call getImage when componentDidMount', () => {
    shallow(<App />);

    expect(getImageImp).toHaveBeenCalledTimes(1);
  });

  it('should call setState with error message when getImage is rejected', (done) => {
    getImage.mockImplementation(() => Promise.reject(Error('getImage error')));

    const app = shallow(<App />);

    setImmediate(() => {
      expect(app.state('error')).toEqual('getImage error');
      done();
    });
  });

  describe('getWeatherByLocationName', () => {
    it('should set error state to Empty location when LocationInput\'s onSearch is called with no location', (done) => {
      const app = shallow(<App />);

      app.find(LocationInput).props().onSearch();

      setImmediate(() => {
        expect(app.state('error')).toEqual('Empty location');
        done();
      });
    });

    it('should call getWeatherByLocationName service when getWeatherByLocationName is called with string length > 1', (done) => {
      const app = shallow(<App />);

      app.find(LocationInput).props().onSearch('Rio de Janeiro');

      setImmediate(() => {
        expect(app.state('error')).toEqual('Invalid location');
        expect(getWeatherByLocationNameImp).toHaveBeenCalledWith('Rio de Janeiro');
        done();
      });
    });

    it('should set error state to Invalid location when getWeatherByLocationName service returns no results', (done) => {
      const app = shallow(<App />);

      getWeatherByLocationNameImp.mockImplementation(() => Promise.resolve({
        json: () => ({
          query: {
            results: null,
          },
        }),
      }));

      app.find(LocationInput).props().onSearch('Rio de Janeiro');

      setImmediate(() => {
        expect(app.state('error')).toEqual('Invalid location');
        done();
      });
    });

    it('should set weather state with getWeatherByLocationName service response', (done) => {
      const app = shallow(<App />);

      getWeatherByLocationNameImp.mockImplementation(() => Promise.resolve({
        json: () => ({
          query: {
            results: [
              {
                data: [],
              },
            ],
          },
        }),
      }));

      app.find(LocationInput).props().onSearch('Rio de Janeiro');

      setImmediate(() => {
        expect(app.state('weather')).toEqual({ query: { results: [{ data: [] }] } });
        expect(app).toMatchSnapshot();
        done();
      });
    });
  });
});
