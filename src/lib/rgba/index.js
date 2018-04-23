/**
 * Returns a RGBA color string
 * @param {Number} r - red color
 * @param {Number} g - green color
 * @param {Number} b - blue color
 * @param {Number} a - alpha
 * @returns {String}
 */
function rgba(r = 255, g = 255, b = 255, a = 1) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default rgba;
