
import getLatLong from './index';

global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(
      callback => callback({
        latitude: 10,
        longitude: 10,
      }),
      error => error(),
    ),
  },
};

beforeEach(() => {
  global.navigator = {
    geolocation: {
      getCurrentPosition: jest.fn(
        callback => callback({
          latitude: 10,
          longitude: 10,
        }),
        error => error(),
      ),
    },
  };
});

describe('getLatLong component', () => {
  it('should trigger callback with coord object', () => {
    getLatLong(({ coords }) => {
      expect(coords).toEqual({
        latitude: 10,
        longitude: 10,
      });
    });
  });

  it('should trigger error callback when getCurrentPosition has errors', () => {
    getLatLong(jest.fn(), (error) => {
      expect(error).toEqual(Error('Geolocation error'));
    });
  });
});
