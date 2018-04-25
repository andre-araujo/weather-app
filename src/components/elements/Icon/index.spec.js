import React from 'react';
import { shallow } from 'enzyme';

import Icon from './index';

const icons = {
  Compass: '(',
  Sun: 'B',
  SunnyCloudy: 'H',
  Cloudy: 'Y',
  Rainy: 'R',
  Storm: 'O',
  Snow: 'X',
  NA: ')',
};

describe('Icon component', () => {
  it('should render an <i> tag with prop "name" as it\'s children', () => {
    const wrapper = shallow(<Icon name="Something">text</Icon>);

    expect(wrapper.find('i').text()).toEqual('Something');
  });

  Object.keys(icons).forEach((icon) => {
    it(`should render an <i> tag with ${icons[icon]} if Icon.${icon} is instantiated`, () => {
      const IconToRender = Icon[icon];
      const wrapper = shallow(<IconToRender />);

      expect(wrapper.find('i').text()).toEqual(icons[icon]);
    });
  });
});
