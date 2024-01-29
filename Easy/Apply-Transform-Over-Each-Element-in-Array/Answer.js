/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

var map = function(arr, fn) {
    const sumArr = [];
    for(let i = 0; i < arr.length; i++){
        sumArr.push(fn(arr[i], i))
    }
    return sumArr;
};
