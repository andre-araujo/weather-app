import rgba from '../rgba';
import fahrenheitToCelcius from '../fahrenheitToCelcius';

/**
 * Retruns a RGBA string based on tempereture number param in º Celcius
 * 15 or less returns blueish colors
 * 35 or greater returns reddish colors
 * 16 to 34 returns yellowish colors
 * @param {Number} temp - temperature in fahrenheit
 * @param {Number} opacity - final color opacity
 * @returns {String}
 */
function getTemperatureColor(temp = 0, opacity = 0.98) {
  const temperature = fahrenheitToCelcius(temp);

  switch (true) {
    case temperature <= 0:
      return rgba(100, 100, 255, opacity);
    case temperature >= 50:
      return rgba(255, 20, 20, opacity);
    case temperature <= 15: {
      const threshold = 120;
      const variableColor = (temperature / threshold) * 100;

      return rgba(50, 50, 255 - variableColor, opacity);
    }
    case temperature >= 35: {
      const threshold = 100;
      const variableColor = (temperature / threshold) * 100;

      return rgba(155 + variableColor, 100 - variableColor, 50, opacity);
    }
    default: {
      const threshold = 150;
      const variableColor = (temperature / threshold) * 100;

      return rgba(255, 220 - variableColor, 120 - variableColor, opacity);
    }
  }
}

export default getTemperatureColor;
