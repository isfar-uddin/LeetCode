class Solution {
public:
    vector<vector<int>> ans;
    
    vector<vector<int>> subsets(vector<int>& nums) {
        dfs(nums, 0, {});
        return ans;
    }
    
    void dfs(vector<int>& nums, int index, vector<int> res) {
        if(index >= nums.size()) {
            ans.push_back(res);
            return;
        }
        res.push_back(nums[index]);
        dfs(nums, index + 1, res);
        res.pop_back();
        dfs(nums, index + 1, res);
        return;
    }
};