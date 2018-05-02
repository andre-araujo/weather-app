
import fahrenheitToCelcius from './index';

describe('fahrenheitToCelcius', () => {
  it('should convert 86 fahrenheit to celcius unit', () => {
    expect(fahrenheitToCelcius(86)).toBe(30);
  });

  it('should convert 59 fahrenheit to celcius unit', () => {
    expect(fahrenheitToCelcius(59)).toBe(15);
  });

  it('should return unconverted value when it\'s is not a number or a string', () => {
    expect(fahrenheitToCelcius(null)).toBe(null);
    expect(fahrenheitToCelcius(false)).toBe(false);
    expect(fahrenheitToCelcius({})).toEqual({});
    expect(fahrenheitToCelcius([])).toEqual([]);
  });

  it('should convert 59 fahrenheit to celcius unit if it is a string', () => {
    expect(fahrenheitToCelcius('59')).toBe(15);
  });
});
