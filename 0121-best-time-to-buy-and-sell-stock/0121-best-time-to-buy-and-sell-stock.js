/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let currMin = Number.POSITIVE_INFINITY;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (currMin > prices[i]) {
            currMin = prices[i];
        } else {
            max = Math.max(max, prices[i] - currMin);
        }
    }

    return max;
};