/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.reduce((acc, currentValue, index) => {
        acc.push(fn(currentValue, index));
        return acc;
    }, []);
};