import React from 'react';
import { shallow } from 'enzyme';

import LocationInput from './index';

jest.mock('../../../lib/getLatLong');

const getLatLongMock = require('../../../lib/getLatLong').default;

let props;

beforeEach(() => {
  props = {
    error: null,
    onSearch: jest.fn(),
    onGetCoords: jest.fn(),
  };
});

describe('LocationInput component', () => {
  it('should match snapshot with no error message', () => {
    expect(shallow(<LocationInput {...props} />)).toMatchSnapshot();
  });

  it('should match snapshot with error message', () => {
    props.error = 'my error message';
    expect(shallow(<LocationInput {...props} />)).toMatchSnapshot();
  });

  it('should preventDefault when form is submited', () => {
    const preventDefault = jest.fn();

    const wrapper = shallow(<LocationInput {...props} />);
    wrapper
      .find('form')
      .simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should call onSearch when form is submited', () => {
    const preventDefault = jest.fn();

    const wrapper = shallow(<LocationInput {...props} />);
    wrapper
      .find('form')
      .simulate('submit', { preventDefault });

    expect(props.onSearch).toHaveBeenCalledTimes(1);
  });

  it('should call onSearch with input value when form is submited', () => {
    const preventDefault = jest.fn();

    const wrapper = shallow(<LocationInput {...props} />);

    wrapper
      .find('input')
      .simulate('change', { target: { value: 'my input value' } });

    wrapper
      .find('form')
      .simulate('submit', { preventDefault });

    expect(props.onSearch).toHaveBeenCalledWith('my input value');
  });

  it('should call onGetCoords with getLatLong result when LocationInput_GetCoords is clicked', () => {
    const wrapper = shallow(<LocationInput {...props} />);

    getLatLongMock.mockImplementation(callback => callback({
      coords: {
        latitude: 10,
        longitude: 10,
      },
    }));

    wrapper
      .find('[data-test="LocationInput_GetCoords"]')
      .simulate('click');

    expect(props.onGetCoords).toHaveBeenCalledWith({
      latitude: 10,
      longitude: 10,
    });
  });

  it('should call onGetCoords with getLatLong error when LocationInput_GetCoords is clicked', () => {
    const wrapper = shallow(<LocationInput {...props} />);

    getLatLongMock.mockImplementation((_, callback) => callback(new Error('error')));

    wrapper
      .find('[data-test="LocationInput_GetCoords"]')
      .simulate('click');

    expect(props.onGetCoords).toHaveBeenCalledWith({ error: Error('error') });
  });
});
