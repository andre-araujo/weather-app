
import imageFactory from './imageFactory';

const raw = {
  images: [{
    url: 'some_url',
    other: 'other',
  }],
};

const converted = {
  imageURL: 'https://www.bing.com/some_url',
};

describe('imageFactory', () => {
  it('should normalize image API response', () => {
    expect(imageFactory(raw)).toEqual(converted);
  });

  it('should not break if it receives undefined', () => {
    expect(imageFactory()).toEqual(null);
  });

  it('should return null if images does not exist into response object', () => {
    expect(imageFactory({})).toEqual(null);
  });

  it('should return null if images array is empty', () => {
    expect(imageFactory({ images: [] })).toEqual(null);
  });
});
