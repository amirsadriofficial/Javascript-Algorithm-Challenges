/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
*/

var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
    //   const newArr = arr;
    //   const length = newArr.length;
    //   for (let i = 0; i < length - 1; i++) {
    //     for (let j = 0; j < length - i - 1; j++) {
    //       const curr = fn(newArr[j]);
    //       const next = fn(newArr[j + 1]);
    //       if (curr > next) {
    //         const temp = newArr[j];
    //         newArr[j] = newArr[j + 1];
    //         newArr[j + 1] = temp;
    //       }
    //     }
    //   }
    //   return newArr;
};

// ٍExample
const arrExmp = [5, 4, 1, 2, 3];
const fnExmp = (x) => x;
console.log(sortBy(arrExmp, fnExmp));
