2630. **Memoize II**

Given a function fn, return a memoized version of that function.<br>

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.<br>

fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other.<br>

 

Example 1:<br>
Input: <br>
getInputs = () => [[2,2],[2,2],[1,2]]<br>
fn = function (a, b) { return a + b; }<br>
Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]<br>
Explanation:<br>
const inputs = getInputs();<br>
const memoized = memoize(fn);<br>
for (const arr of inputs) {<br>
  memoized(...arr);<br>
}<br>
For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn().<br>
For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.<br>
For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.<br>

Example 2:<br>
Input: <br>
getInputs = () => [[{},{}],[{},{}],[{},{}]] <br>
fn = function (a, b) { return ({...a, ...b}); }<br>
Output: [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]<br>
Explanation:<br>
Merging two empty objects will always result in an empty object. It may seem like there should only be 1 call to fn() because of cache-hits, however none of those objects are === to each other.<br>

Example 3:<br>
Input: <br>
getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }<br>
fn = function (a, b) { return ({...a, ...b}); }<br>
Output: [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]<br>
Explanation:<br>
Merging two empty objects will always result in an empty object. The 2nd and 3rd third function calls result in a cache-hit. This is because every object passed in is identical.<br>

Constraints:<br>
1 <= inputs.length <= 105<br>
0 <= inputs.flat().length <= 105<br>
inputs[i][j] != NaN
