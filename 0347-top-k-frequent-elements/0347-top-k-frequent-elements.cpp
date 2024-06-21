class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        priority_queue<pair<int,int>> pq;
        unordered_map<int,int> mp;
        vector<int> ans;
        
        for(int i = 0; i < nums.size(); i++) {
            mp[nums[i]]++;
        }
        
        for(auto it = mp.begin(); it != mp.end(); it++) {
            pq.push({it -> second, it -> first});
            
            if(pq.size() > mp.size() - k) {
                ans.push_back(pq.top().second);
                pq.pop();
            }
        }
        
        return ans;
    }
};