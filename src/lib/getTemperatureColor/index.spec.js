
import getTemperatureColor from './index';

describe('getTemperatureColor', () => {
  it('should return a blueish color bellow 59º fahrenheit', () => {
    expect(getTemperatureColor(58)).toEqual('rgba(50, 50, 243.33333333333334, 0.98)');
    expect(getTemperatureColor(50)).toEqual('rgba(50, 50, 246.66666666666666, 0.98)');
    expect(getTemperatureColor(45)).toEqual('rgba(50, 50, 249.16666666666666, 0.98)');
  });

  it('should return a yellowish color from 59º to 95º fahrenheit', () => {
    expect(getTemperatureColor(59)).toEqual('rgba(255, 210, 110, 0.98)');
    expect(getTemperatureColor(95)).toEqual('rgba(255, 196.66666666666666, 96.66666666666667, 0.98)');
    expect(getTemperatureColor(80)).toEqual('rgba(255, 202, 102, 0.98)');
  });

  it('should return a yellowish color above 95º fahrenheit', () => {
    expect(getTemperatureColor(96)).toEqual('rgba(191, 64, 50, 0.98)');
    expect(getTemperatureColor(110)).toEqual('rgba(198, 57, 50, 0.98)');
    expect(getTemperatureColor(120)).toEqual('rgba(204, 51, 50, 0.98)');
  });
});
