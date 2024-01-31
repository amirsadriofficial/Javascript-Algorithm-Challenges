2727. **Is Object Empty**

Given an object or an array, return if it is empty.<br>

An empty object contains no key-value pairs.<br>
An empty array contains no elements.<br>
You may assume the object or array is the output of JSON.parse.<br>

 

Example 1:<br>
Input: obj = {"x": 5, "y": 42}<br>
Output: false<br>
Explanation: The object has 2 key-value pairs so it is not empty.<br>

Example 2:<br>
Input: obj = {}<br>
Output: true<br>
Explanation: The object doesn't have any key-value pairs so it is empty.<br>

Example 3:<br>
Input: obj = [null, false, 0]<br>
Output: false<br>
Explanation: The array has 3 elements so it is not empty.<br>

Constraints:<br>
obj is a valid JSON object or array<br>
2 <= JSON.stringify(obj).length <= 105
