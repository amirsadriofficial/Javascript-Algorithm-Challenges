2650. **Design Cancellable Function**

Sometimes you have a long running task, and you may wish to cancel it before it completes. To help with this goal, write a function cancellable that accepts a generator object and returns an array of two values: a cancel function and a promise.<br>

You may assume the generator function will only yield promises. It is your function's responsibility to pass the values resolved by the promise back to the generator. If the promise rejects, your function should throw that error back to the generator.<br>

If the cancel callback is called before the generator is done, your function should throw an error back to the generator. That error should be the string "Cancelled" (Not an Error object). If the error was caught, the returned promise should resolve with the next value that was yielded or returned. Otherwise, the promise should reject with the thrown error. No more code should be executed.<br>

When the generator is done, the promise your function returned should resolve the value the generator returned. If, however, the generator throws an error, the returned promise should reject with the error.<br>

An example of how your code would be used:<br>

function* tasks() {<br>
  const val = yield new Promise(resolve => resolve(2 + 2));<br>
  yield new Promise(resolve => setTimeout(resolve, 100));<br>
  return val + 1; // calculation shouldn't be done.<br>
}<br>
const [cancel, promise] = cancellable(tasks());<br>
setTimeout(cancel, 50);<br>
promise.catch(console.log); // logs "Cancelled" at t=50ms<br>
If instead cancel() was not called or was called after t=100ms, the promise would have resolved 5.<br>

 

Example 1:<br>
Input: <br>
generatorFunction = function*() { <br>
  return 42; <br>
}<br>
cancelledAt = 100<br>
Output: {"resolved": 42}<br>
Explanation:<br>
const generator = generatorFunction();<br>
const [cancel, promise] = cancellable(generator);<br>
setTimeout(cancel, 100);<br>
promise.then(console.log); // resolves 42 at t=0ms<br>
The generator immediately yields 42 and finishes. Because of that, the returned promise immediately resolves 42. Note that cancelling a finished generator does nothing.<br>

Example 2:<br>
Input:<br>
generatorFunction = function*() { <br>
  const msg = yield new Promise(res => res("Hello"));<br> 
  throw `Error: ${msg}`; <br>
}<br>
cancelledAt = null<br>
Output: {"rejected": "Error: Hello"}<br>
Explanation:<br>
A promise is yielded. The function handles this by waiting for it to resolve and then passes the resolved value back to the generator. Then an error is thrown which has the effect of causing the promise to reject with the same thrown error.<br>

Example 3:<br>
Input: <br>
generatorFunction = function*() { <br>
  yield new Promise(res => setTimeout(res, 200)); <br>
  return "Success"; <br>
}<br>
cancelledAt = 100<br>
Output: {"rejected": "Cancelled"}<br>
Explanation:<br>
While the function is waiting for the yielded promise to resolve, cancel() is called. This causes an error message to be sent back to the generator. Since this error is uncaught, the returned promise rejected with this error.<br>

Example 4:<br>
Input:<br>
generatorFunction = function*() { <br>
  let result = 0; <br>
  yield new Promise(res => setTimeout(res, 100));<br>
  result += yield new Promise(res => res(1)); <br>
  yield new Promise(res => setTimeout(res, 100)); <br>
  result += yield new Promise(res => res(1)); <br>
  return result;<br>
}<br>
cancelledAt = null<br>
Output: {"resolved": 2}<br>
Explanation:<br>
4 promises are yielded. Two of those promises have their values added to the result. After 200ms, the generator finishes with a value of 2, and that value is resolved by the returned promise.<br>

Example 5:<br>
Input: <br>
generatorFunction = function*() { <br>
  let result = 0; <br>
  try { <br>
    yield new Promise(res => setTimeout(res, 100)); <br>
    result += yield new Promise(res => res(1)); <br>
    yield new Promise(res => setTimeout(res, 100)); <br>
    result += yield new Promise(res => res(1)); <br>
  } catch(e) { <br>
    return result; <br>
  } <br>
  return result; <br>
}<br>
cancelledAt = 150<br>
Output: {"resolved": 1}<br>
Explanation:<br>
The first two yielded promises resolve and cause the result to increment. However, at t=150ms, the generator is cancelled. The error sent to the generator is caught and the result is returned and finally resolved by the returned promise.<br>

Example 6:<br>
Input: <br>
generatorFunction = function*() { <br>
  try { <br>
    yield new Promise((resolve, reject) => reject("Promise Rejected")); <br>
  } catch(e) { <br>
    let a = yield new Promise(resolve => resolve(2));<br>
    let b = yield new Promise(resolve => resolve(2)); <br>
    return a + b; <br>
  }; <br>
}<br>
cancelledAt = null<br>
Output: {"resolved": 4}<br>
Explanation:<br>
The first yielded promise immediately rejects. This error is caught. Because the generator hasn't been cancelled, execution continues as usual. It ends up resolving 2 + 2 = 4.<br>

Constraints:<br>
cancelledAt == null or 0 <= cancelledAt <= 1000<br>
generatorFunction returns a generator object
