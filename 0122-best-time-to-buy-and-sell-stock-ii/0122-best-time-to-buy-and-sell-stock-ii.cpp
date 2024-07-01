class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = prices[0], profit = 0;
        
        for(int i = 1; i < prices.size(); i++) {
            if(prices[i] < prices[i - 1]) {
                profit += prices[i - 1] - minPrice;
                minPrice = prices[i];
            }
        }
        
        if(prices[prices.size() - 1] > minPrice) profit += prices[prices.size() - 1] - minPrice;
        
        return profit;
    }
};