# plain-array

Quickly flattens a deeply nested array without using functional recursion.

`npm install plain-array`

## Example

```js
import flatten from 'plain-array';

const array = [0, [1], [2, [3, [4, [5]]], 6], [[7]]];

flatten(array); // => [0, 1, 2, 3, 4, 5, 6, 7]
```
