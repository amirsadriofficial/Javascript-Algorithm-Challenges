/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function (fn) {
  const grouoedObj = {};
  for (let element of this) {
    const key = fn(element);
    grouoedObj[key] ||= [];
    grouoedObj[key].push(element);
  }
  return grouoedObj;
};

// Example
[1, 2, 3].groupBy(String); // {"1":[1],"2":[2],"3":[3]}
