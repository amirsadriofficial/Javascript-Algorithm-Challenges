/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
*/

var createCounter = function (init = 0) {
    let initNum = init
    function increment() {
        initNum++;
        return initNum;
    }
    function decrement() {
        initNum--;
        return initNum;
    }
    function reset() {
        initNum = init
        return initNum;
    }
    return { increment, decrement, reset };
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
