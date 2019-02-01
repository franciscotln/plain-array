export default function flatten(array) {
  let copy = array.slice();
  const res = [];
  while (copy.length) {
    const curr = copy.pop();
    if (Array.isArray(curr)) {
      for (let i = 0; i < curr.length; i++) {
        copy.push(curr[i]);
      }
    } else {
      res.push(curr);
    }
  }
  return res.reverse();
}
