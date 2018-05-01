import React from 'react';
import { shallow } from 'enzyme';

import WeatherForecast from './index';
import WeatherInfo from '../../elements/WeatherInfo';

jest.mock('../../../lib/getLatLong');

let props;

beforeEach(() => {
  props = {
    weather: {
      data: [
        {
          day: 'Today',
          humidity: '00',
          pressure: '00',
          temperature: '80',
          temperatureUnit: 'F',
          weather: '00',
          weatherCode: '00',
          wind: '00',
          onClick: jest.fn(),
          toggleTemperatureUnit: jest.fn(),
        },
        {
          day: 'Tomorrow',
          temperature: '80',
          temperatureUnit: 'F',
          weather: '00',
          weatherCode: '00',
          onClick: jest.fn(),
          toggleTemperatureUnit: jest.fn(),
        },
        {
          day: 'After Tomorrow',
          temperature: '80',
          temperatureUnit: 'F',
          weather: '00',
          weatherCode: '00',
          onClick: jest.fn(),
          toggleTemperatureUnit: jest.fn(),
        },
      ],
      location: {
        city: 'xx',
        region: 'xx',
      },
      units: {
        temperature: 'F',
      },
    },
  };
});

describe('WeatherForecast component', () => {
  it('should match snapshot with no error message', () => {
    expect(shallow(<WeatherForecast {...props} />)).toMatchSnapshot();
  });

  it('should set third item from infoStateList as true', () => {
    const wrapper = shallow(<WeatherForecast {...props} />);

    const itemProp = wrapper
      .find('li')
      .at(2)
      .find(WeatherInfo)
      .get(0)
      .props;

    expect(wrapper.state('infoStateList')).toEqual([true, false, false]);

    itemProp.onClick();

    expect(wrapper.state('infoStateList')).toEqual([false, false, true]);
  });

  it('should set second item from infoStateList as true', () => {
    const wrapper = shallow(<WeatherForecast {...props} />);

    const itemProp = wrapper
      .find('li')
      .at(1)
      .find(WeatherInfo)
      .get(0)
      .props;

    expect(wrapper.state('infoStateList')).toEqual([true, false, false]);

    itemProp.onClick();

    expect(wrapper.state('infoStateList')).toEqual([false, true, false]);
  });

  it('should toggleTemperatureUnit when WeatherInfo\'s toggleTemperatureUnit prop is called', () => {
    const wrapper = shallow(<WeatherForecast {...props} />);

    const itemProp = wrapper
      .find('li')
      .at(1)
      .find(WeatherInfo)
      .get(0)
      .props;

    expect(wrapper.state('temperatureUnit')).toEqual('F');

    itemProp.toggleTemperatureUnit();

    expect(wrapper.state('temperatureUnit')).toEqual('C');

    itemProp.toggleTemperatureUnit();

    expect(wrapper.state('temperatureUnit')).toEqual('F');
  });
});
