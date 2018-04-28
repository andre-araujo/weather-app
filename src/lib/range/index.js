export default (start, size) =>
  Array.apply(null, Array(size))
    .map((_, i) => i + start);
