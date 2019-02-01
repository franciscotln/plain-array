const tape = require('tape');
const flatten = require('.');

tape('should flatten a deeply nested array', test => {
  const nestedArray = [0, [1], [2, [3]], [4, [5, [6]]], [[7], [[8]]], [[9]]];

  test.deepEquals(flatten(nestedArray), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  test.end();
});

tape('should return a shallow copy of the same array if it is already flat', test => {
  const array = [0, 1, 2];

  test.deepEquals(flatten(array), array);

  test.end();
});

tape('should with empty arrays', test => {
  const array = [];

  test.deepEquals(flatten(array), []);

  test.end();
});
