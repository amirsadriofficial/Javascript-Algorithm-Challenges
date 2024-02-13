/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
*/

const checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null || typeof classFunction != 'function')
        return false;
    let val = (Object(obj) instanceof classFunction);
    return val;
};

// Example
checkIfInstanceOf(new Date(), Date); // true
