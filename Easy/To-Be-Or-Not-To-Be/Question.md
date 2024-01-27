2704. **To Be Or Not To Be**

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.<br>

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".<br>
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".<br>
 

Example 1:<br>
Input: func = () => expect(5).toBe(5)<br>
Output: {"value": true}<br>
Explanation: 5 === 5 so this expression returns true.<br>

Example 2:<br>
Input: func = () => expect(5).toBe(null)<br>
Output: {"error": "Not Equal"}<br>
Explanation: 5 !== null so this expression throw the error "Not Equal".<br>

Example 3:<br>
Input: func = () => expect(5).notToBe(null)<br>
Output: {"value": true}<br>
Explanation: 5 !== null so this expression returns true.<br>
