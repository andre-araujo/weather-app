export default (start, size) =>
  Array(...Array(size))
    .map((_, i) => i + start);
