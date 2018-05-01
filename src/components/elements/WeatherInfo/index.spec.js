import React from 'react';
import { shallow } from 'enzyme';

import WeatherInfo from './index';

let props;

beforeEach(() => {
  props = {
    day: 'Today',
    humidity: '00',
    pressure: '00',
    temperature: '80',
    temperatureUnit: 'F',
    weather: '00',
    weatherCode: '00',
    wind: '00',
    isOpen: true,
    onClick: jest.fn(),
    toggleTemperatureUnit: jest.fn(),
  };
});

describe('WeatherInfo component', () => {
  it('should match snapshot with all props', () => {
    expect(shallow(<WeatherInfo {...props} />)).toMatchSnapshot();
  });

  it('should match snapshot with only required props', () => {
    expect(shallow(<WeatherInfo weatherCode="00" />)).toMatchSnapshot();
  });

  it('should call toggleTemperatureUnit prop when temperature unit is clicked', () => {
    const wrapper = shallow(<WeatherInfo {...props} />);
    wrapper
      .find('[data-test="WeatherInfo_Temperature"]')
      .simulate('click');

    expect(props.toggleTemperatureUnit).toHaveBeenCalledTimes(1);
  });

  it('should converts temperature displayed in FAHRENHEIT', () => {
    props.temperature = '80';
    props.temperatureUnit = 'F';

    const wrapper = shallow(<WeatherInfo {...props} />);
    const displayedTemperature = wrapper
      .find('[data-test="WeatherInfo_Temperature"]')
      .text();

    expect(displayedTemperature).toEqual('80ºF');
  });

  it('should converts temperature displayed in CELCIUS', () => {
    props.temperature = '80';
    props.temperatureUnit = 'C';

    const wrapper = shallow(<WeatherInfo {...props} />);
    const displayedTemperature = wrapper
      .find('[data-test="WeatherInfo_Temperature"]')
      .text();

    expect(displayedTemperature).toEqual('27ºC');
  });
});
