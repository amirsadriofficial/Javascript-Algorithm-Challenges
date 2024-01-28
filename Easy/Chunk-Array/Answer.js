/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
*/

var chunk = function (arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    newArr.push(chunk);
  }
  return newArr;
};

console.log(chunk([1, 2, 3, 4, 5, 6], 7));
