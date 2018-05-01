/**
 * Invoke geolocation getCurrentPosition to guess coordinates
 * @param {Function} callback - callback function that receives an object with coordinates
 * @param {Function} errorCallback - callback function that receives an Error
 * {
 *  coords: {
 *    latitude: Number,
 *    longitude: Number,
 *  }
 * }
 */
function getLatLong(callback, errorCallback) {
  if (typeof window !== 'undefined') {
    navigator.geolocation.getCurrentPosition(callback, errorCallback);
  }
}

export default getLatLong;
