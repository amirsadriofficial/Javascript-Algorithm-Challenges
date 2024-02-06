/**
 * @param {Array} arr
 * @return {Generator}
*/

var inorderTraversal = function* (arr) {
  function* traverse(element) {
    if (Array.isArray(element)) {
      for (let subArray of element) {
        yield* traverse(subArray);
      }
    } else {
      yield element;
    }
  }
  yield* traverse(arr);
};

const gen = inorderTraversal([1, [2, 3]]);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
gen.next().done; // true
