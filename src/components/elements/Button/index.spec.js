import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

let props;

beforeEach(() => {
  props = {
    onClick: jest.fn(),
  };
});

describe('Button component', () => {
  it('should match snapshot', () => {
    expect(shallow(<Button {...props}>text</Button>)).toMatchSnapshot();
  });

  it('should call onClick prop when Button is clicked', () => {
    const button = shallow(<Button {...props}>text</Button>);
    button.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });

  it('shouldn\'t call onClick prop when Button is not clicked', () => {
    shallow(<Button {...props}>text</Button>);

    expect(props.onClick).not.toHaveBeenCalled();
  });
});
