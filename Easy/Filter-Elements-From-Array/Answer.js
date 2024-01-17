/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

var filter = function(arr, fn) {
    return arr.filter(fn)
};

// Example
filter([0,10,20,30],function greaterThan10(n) { return n > 10; })
