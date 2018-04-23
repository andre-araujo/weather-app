/**
 * Invoke geolocation getCurrentPosition to guess coordinates
 * @param {Function} callback - callback function that receives an object with coordinates
 * {
 *  coords: {
 *    latitude: Number,
 *    longitude: Number,
 *  }
 * }
 */
function getLatLong(callback) {
  if (typeof window !== 'undefined') {
    window.navigator.geolocation.getCurrentPosition(callback);
  }
}

export default getLatLong;
