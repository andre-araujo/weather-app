import React from 'react';
import { render } from 'enzyme';

import WeatherIcon, { iconDictionary } from './index';

describe('WeatherIcon component', () => {
  it('To have text of icon Storm', () => {
    iconDictionary.Storm.forEach((weatherCode) => {
      expect(render(<WeatherIcon weatherCode={weatherCode} />).text()).toEqual('O');
    });
  });

  it('To have text of icon Snow', () => {
    iconDictionary.Snow.forEach((weatherCode) => {
      expect(render(<WeatherIcon weatherCode={weatherCode} />).text()).toEqual('X');
    });
  });

  it('To have text of icon Cloudy', () => {
    iconDictionary.Cloudy.forEach((weatherCode) => {
      expect(render(<WeatherIcon weatherCode={weatherCode} />).text()).toEqual('Y');
    });
  });

  it('To have text of icon SunnyCloudy', () => {
    iconDictionary.SunnyCloudy.forEach((weatherCode) => {
      expect(render(<WeatherIcon weatherCode={weatherCode} />).text()).toEqual('H');
    });
  });

  it('To have text of icon Sun', () => {
    iconDictionary.Sun.forEach((weatherCode) => {
      expect(render(<WeatherIcon weatherCode={weatherCode} />).text()).toEqual('B');
    });
  });

  it('To have text of icon NA when it has no other matches', () => {
    expect(render(<WeatherIcon weatherCode="3200" />).text()).toEqual(')');
  });
});
