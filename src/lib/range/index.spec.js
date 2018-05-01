
import range from './index';

describe('range', () => {
  it('should return an array with 4 arguments', () => {
    expect(range(0, 4)).toEqual([0, 1, 2, 3]);
  });

  it('should return an array with 4 arguments starting with 32', () => {
    expect(range(32, 4)).toEqual([32, 33, 34, 35]);
  });

  it('should return an array with 4 arguments starting with 32', () => {
    expect(range(-5, 4)).toEqual([-5, -4, -3, -2]);
  });
});
