/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

const promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }
    const arr = new Array(functions.length);
    arr.fill(null);
    let count = 0;
    functions.forEach(async (fn, i) => {
      try {
        arr[i] = await fn();
        count++;
        if (count === functions.length) {
          resolve(arr);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
};

// Example
const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
