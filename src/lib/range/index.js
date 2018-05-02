/**
 * Creates an array of integers determinated by start and size params
 * @param {Number} start - start of range
 * @param {Number} size - count of numbers
 * @returns {Array}
 */
function range(start, size) {
  return Array(...Array(size))
    .map((_, i) => i + start);
}

export default range;
