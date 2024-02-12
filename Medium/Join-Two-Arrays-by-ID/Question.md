2722. **Join Two Arrays by ID**

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.<br>

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.<br>

If two objects share an id, their properties should be merged into a single object:<br>

If a key only exists in one object, that single key-value pair should be included in the object.<br>
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.<br>

Example 1:<br>
Input: <br>
arr1 = [<br>
{"id": 1, "x": 1},<br>
{"id": 2, "x": 9}<br>
], <br>
arr2 = [<br>
{"id": 3, "x": 5}<br>
]<br>
Output: <br>
[<br>
{"id": 1, "x": 1},<br>
{"id": 2, "x": 9},<br>
{"id": 3, "x": 5}<br>
]<br>
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.<br>

Example 2:<br>
Input: <br>
arr1 = [<br>
{"id": 1, "x": 2, "y": 3},<br>
{"id": 2, "x": 3, "y": 6}<br>
], <br>
arr2 = [<br>
{"id": 2, "x": 10, "y": 20},<br>
{"id": 3, "x": 0, "y": 0}<br>
]<br>
Output: <br>
[<br>
{"id": 1, "x": 2, "y": 3},<br>
{"id": 2, "x": 10, "y": 20},<br>
{"id": 3, "x": 0, "y": 0}<br>
]<br>
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.<br>

Example 3:<br>
Input: <br>
arr1 = [<br>
{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}<br>
]<br>
arr2 = [<br>
{"id": 1, "b": {"c": 84}, "v": [1, 3]}<br>
]<br>
Output: [<br>
{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}<br>
]<br>
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.<br>

Constraints:<br>
arr1 and arr2 are valid JSON arrays<br>
Each object in arr1 and arr2 has a unique integer id key<br>
2 <= JSON.stringify(arr1).length <= 106<br>
2 <= JSON.stringify(arr2).length <= 106
