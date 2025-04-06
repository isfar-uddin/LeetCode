class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int curr = 0, maxP = 0, minP = prices[0];
        for(int i = 1; i < prices.size(); i++) {
            if(minP > prices[i]) {
                minP = prices[i];
            } else {
                maxP = max(maxP, prices[i] - minP);
            }
        }

        return maxP;
    }
};