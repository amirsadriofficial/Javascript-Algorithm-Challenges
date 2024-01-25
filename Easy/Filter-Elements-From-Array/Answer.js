/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

var filter = function(arr, fn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++){ 
        fn(arr[i],i) && newArr.push(arr[i]);
    }
    return newArr;
};

// Example
filter([0,10,20,30],function greaterThan10(n) { return n > 10; })
