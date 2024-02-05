2631. **Group By**

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.<br>

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.<br>

The provided callback fn will accept an item in the array and return a string key.<br>

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.<br>

Please solve it without lodash's _.groupBy function.<br>

 

Example 1:<br>
Input: <br>
array = [<br>
  {"id":"1"},<br>
  {"id":"1"},<br>
  {"id":"2"}<br>
], <br>
fn = function (item) { <br>
  return item.id; <br>
}<br>
Output: <br>
{ <br>
  "1": [{"id": "1"}, {"id": "1"}],   <br>
  "2": [{"id": "2"}] <br>
}<br>
Explanation:<br>
Output is from array.groupBy(fn).<br>
The selector function gets the "id" out of each item in the array.<br>
There are two objects with an "id" of 1. Both of those objects are put in the first array.<br>
There is one object with an "id" of 2. That object is put in the second array.<br>

Example 2:<br>
Input: <br>
array = [<br>
  [1, 2, 3],<br>
  [1, 3, 5],<br>
  [1, 5, 9]<br>
]<br>
fn = function (list) { <br>
  return String(list[0]); <br>
}<br>
Output: <br>
{ <br>
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] <br>
}<br>
Explanation:<br>
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. <br>
All the arrays have 1 as their first element so they are grouped together.<br>
{<br>
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]<br>
}<br>

Example 3:<br>
Input: <br>
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]<br>
fn = function (n) { <br>
  return String(n > 5);<br>
}<br>
Output:<br>
{<br>
  "true": [6, 7, 8, 9, 10],<br>
  "false": [1, 2, 3, 4, 5]<br>
}<br>
Explanation:<br>
The selector function splits the array by whether each number is greater than 5.<br>

Constraints:<br>
0 <= array.length <= 105<br>
fn returns a string
