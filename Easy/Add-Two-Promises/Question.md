2723. **Add Two Promises**

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.<br>
 

Example 1:<br>
Input: <br>
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), <br>
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))<br>
Output: 7<br>
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.<br>

Example 2:<br>
Input: <br>
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), <br>
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))<br>
Output: -2<br>
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.<br>

Constraints:<br>
promise1 and promise2 are promises that resolve with a number
