class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int maxCandies = 0;
        vector<bool> ans;
        
        for(int i = 0; i < candies.size(); i++) {
            if(maxCandies < candies[i]) {
                maxCandies = candies[i];
            }
        }
        
        for(int i = 0; i < candies.size(); i++) {
            if(maxCandies <= extraCandies + candies[i]) {
                ans.push_back(true);
            } else{
                ans.push_back(false);
            }
        }
        
        return ans;
    }
};