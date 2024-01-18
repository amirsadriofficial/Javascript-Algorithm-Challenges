/**
 * @param {number} n
 * @return {number}
*/

var climbStairs = function(n) {
    let x = 0;
    let y = 1;
    for (let i=1; i<=n; i++){
        let sum = x + y;
        x = y
        y = sum
    }
    return y;
};

// Exmaple
climbStairs(5)

// Fibonacci Number
// 1 => 1
// 2 => 2
// 3 => 3
// 4 => 5
// 5 => 8
