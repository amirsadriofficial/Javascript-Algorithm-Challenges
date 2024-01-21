/**
 * @return {Generator<number>}
*/

var fibGenerator = function*() {
    let x = 0;
    let y = 1;
    if(x === 0) {
        yield 0;
    }
    if(y === 1) {
        yield 1;
    }
    for (let i=1; i<=50; i++){
        let sum = x + y;
        x = y;
        y = sum;
        yield y;
    }
};

// Example 
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
