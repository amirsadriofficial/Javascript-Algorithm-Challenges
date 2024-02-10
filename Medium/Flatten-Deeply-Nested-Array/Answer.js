/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
*/

var flat = function (arr, n) {
  if (n == 0) {
    return arr;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (n > 0 && Array.isArray(arr[i])) {
      result.push(...flat(arr[i], n - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
