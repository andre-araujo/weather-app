import React from 'react';
import { shallow } from 'enzyme';

import ImageBackground from './index';

describe('ImageBackground component', () => {
  it('should match snapshot', () => {
    expect(shallow(<ImageBackground />)).toMatchSnapshot();
  });

  it('should match snapshot with image background', () => {
    expect(shallow(<ImageBackground imageURL="/my-image-path" />)).toMatchSnapshot();
  });

  it('should match snapshot with children', () => {
    expect(shallow(<ImageBackground>my content</ImageBackground>)).toMatchSnapshot();
  });
});
