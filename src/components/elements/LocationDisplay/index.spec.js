import React from 'react';
import { shallow } from 'enzyme';

import LocationDisplay from './index';

describe('LocationDisplay component', () => {
  it('should match snapshot with text as ,', () => {
    expect(shallow(<LocationDisplay />)).toMatchSnapshot();
  });

  it('should match snapshot with text as city,', () => {
    expect(shallow(<LocationDisplay city="city" />)).toMatchSnapshot();
  });

  it('should match snapshot with text as city, state', () => {
    expect(shallow(<LocationDisplay city="city" state="state" />)).toMatchSnapshot();
  });
});
