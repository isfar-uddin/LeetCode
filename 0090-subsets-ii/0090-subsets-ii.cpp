class Solution {
public:
    set<vector<int>> ans;
    
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        backtracking(nums, 0, {});
        vector<vector<int>> res;
        for(auto it = ans.begin(); it != ans.end(); it++) {
            res.push_back(*it);
        }
        return res;
    }
    
    void backtracking(vector<int>& nums, int index, vector<int> res) {
        if(index == nums.size()) {
            ans.insert(res);
            return;
        }
        backtracking(nums, index + 1, res);
        res.push_back(nums[index]);
        backtracking(nums, index + 1, res);
        return;
    }
};