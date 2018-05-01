import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

global.Date = jest.fn()

const mockGeolocation = {
  getCurrentPosition: jest.fn(
    (callback, error) => {
      callback && callback({
        coords: {
          latitude: 10,
          longitude: 10,
        }
      })
      error && error(Error('Geolocation error'))
    },
  ),
};

global.navigator.geolocation = mockGeolocation;
