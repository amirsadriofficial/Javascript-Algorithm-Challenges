/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
*/

var argumentsLength = function (...args) {
    for (let i = 0; i < Infinity; i++) {
        if (args[i] === undefined) {
            return i;
        }
    }
};

// Example
argumentsLength(1, 2, 3); // 3
