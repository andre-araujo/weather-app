import rgba from '.';

describe('rgba', () => {
  it('should return a string that defaults to 255 value for rgb colors, and 1 to alpha color', () => {
    expect(rgba()).toEqual('rgba(255, 255, 255, 1)');
  });

  it('should return a string with red as passed param, and default values for missing params', () => {
    expect(rgba(234)).toEqual('rgba(234, 255, 255, 1)');
  });

  it('should return rgba fullfiled', () => {
    expect(rgba(234, 213, 64, 0.1)).toEqual('rgba(234, 213, 64, 0.1)');
  });
});
