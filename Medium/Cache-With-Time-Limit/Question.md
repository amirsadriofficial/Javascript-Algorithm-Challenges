2622. **Cache With Time Limit**

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.<br>

The class has three public methods:<br>

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.<br>

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.<br>

count(): returns the count of un-expired keys.<br>

Example 1:<br>
Input: <br>
actions = ["TimeLimitedCache", "set", "get", "count", "get"]<br>
values = [[], [1, 42, 100], [1], [], [1]]<br>
timeDelays = [0, 0, 50, 50, 150]<br>
Output: [null, false, 42, 1, -1]<br>
Explanation:<br>
At t=0, the cache is constructed.<br>
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.<br>
At t=50, key=1 is requested and the value of 42 is returned.<br>
At t=50, count() is called and there is one active key in the cache.<br>
At t=100, key=1 expires.<br>
At t=150, get(1) is called but -1 is returned because the cache is empty.<br>

Example 2:<br>
Input: <br>
actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]<br>
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]<br>
timeDelays = [0, 0, 40, 50, 120, 200, 250]<br>
Output: [null, false, true, 50, 50, -1, 0]<br>
Explanation:<br>
At t=0, the cache is constructed.<br>
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.<br>
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.<br>
At t=50, get(1) is called which returned 50.<br>
At t=120, get(1) is called which returned 50.<br>
At t=140, key=1 expires.<br>
At t=200, get(1) is called but the cache is empty so -1 is returned.<br>
At t=250, count() returns 0 because the cache is empty.<br>

Constraints:<br>
0 <= key, value <= 109<br>
0 <= duration <= 1000<br>
1 <= actions.length <= 100<br>
actions.length === values.length<br>
actions.length === timeDelays.length<br>
0 <= timeDelays[i] <= 1450<br>
actions[i] is one of "TimeLimitedCache", "set", "get" and "count"<br>
First action is always "TimeLimitedCache" and must be executed immediately, with a 0-millisecond delay
