/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
*/

Function.prototype.callPolyfill = function (context, ...args) {
  const uniqueId = Symbol();
  context[uniqueId] = this;
  const ans = context[uniqueId](...args);
  delete context[uniqueId];
  return ans;
};

// Example
function increment() {
  this.count++;
  return this.count;
}
increment.callPolyfill({ count: 1 }); // 2
