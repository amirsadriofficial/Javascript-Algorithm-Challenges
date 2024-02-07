2705. **Compact Object**

Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.<br>

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.<br>

 

Example 1:<br>
Input: obj = [null, 0, false, 1]<br>
Output: [1]<br>
Explanation: All falsy values have been removed from the array.<br>

Example 2:<br>
Input: obj = {"a": null, "b": [false, 1]}<br>
Output: {"b": [1]}<br>
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.<br>

Example 3:<br>
Input: obj = [null, 0, 5, [0], [false, 16]]<br>
Output: [5, [], [16]]<br>
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.<br>

Constraints:<br>
obj is a valid JSON object<br>
2 <= JSON.stringify(obj).length <= 106
