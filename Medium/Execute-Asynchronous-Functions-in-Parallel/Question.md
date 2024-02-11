2721. **Execute Asynchronous Functions in Parallel**

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.<br>

promise resolves:<br>
When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.<br>

promise rejects:<br>
When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.<br>

Please solve it without using the built-in Promise.all function.<br>

 

Example 1:<br>
Input: functions = [<br>
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))<br>
]<br>
Output: {"t": 200, "resolved": [5]}<br>
Explanation: <br>
promiseAll(functions).then(console.log); // [5]<br>
The single function was resolved at 200ms with a value of 5.<br>

Example 2:<br>
Input: functions = [<br>
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), <br>
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))<br>
]<br>
Output: {"t": 100, "rejected": "Error"}<br>
Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.<br>

Example 3:<br>
Input: functions = [<br>
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), <br>
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), <br>
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))<br>
]<br>
Output: {"t": 150, "resolved": [4, 10, 16]}<br>
Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.<br>

Constraints:<br>
functions is an array of functions that returns promises<br>
1 <= functions.length <= 10
