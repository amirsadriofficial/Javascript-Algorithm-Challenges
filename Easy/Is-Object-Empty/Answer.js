/**
 * @param {Object|Array} obj
 * @return {boolean}
*/

var isEmpty = function (obj) {
    for (let i in obj) {
        return false;
    }
    return true;
};

// Example
const testObj = { "x": 5, "y": 42 }
const testObj2 = [null, false, 0]
console.log(isEmpty(testObj));
