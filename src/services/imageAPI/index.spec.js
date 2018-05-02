import { getImage } from './index';
import { IMAGE_API_URL } from '../../lib/constants';

global.fetch = jest.fn(() => Promise.resolve({ status: 200 }));

beforeEach(() => {
  global.fetch.mockReset();
});

describe('imageAPI', () => {
  it('should call Image API get URL', () => {
    getImage();

    expect(global.fetch).toHaveBeenCalledWith(IMAGE_API_URL);
  });

  it('should call Image API get URL without influence of params', () => {
    getImage('hey');

    expect(global.fetch).toHaveBeenCalledWith(IMAGE_API_URL);
  });
});
