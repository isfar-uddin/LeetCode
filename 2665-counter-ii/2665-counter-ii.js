/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    this.init = init;
    
    increment = () => {
        this.init++;
        return this.init;
    }
    
    decrement = () => {
        this.init--;
        return this.init;
    }
    
    reset = () => {
        this.init = init;
        return this.init;
    }
    
    return {
        increment,
        decrement,
        reset,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */