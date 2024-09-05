class Solution {
public:
    vector<vector<int>> ans;
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        dfs(candidates, target, 0, {});
        return ans;
    }
    
    void dfs(vector<int>& candidates, int target, int index, vector<int> res) {
        if(index >= candidates.size() || target < 0) return;
        
        if(target == 0) {
            ans.push_back(res);
            return;
        }
        
        res.push_back(candidates[index]);
        dfs(candidates, target - candidates[index], index, res);
        res.pop_back();
        dfs(candidates, target, index + 1, res);
        return;
    }
};