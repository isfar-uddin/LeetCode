class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        
        priority_queue<int, vector<int>, greater<int>> pq;

        for(int i = 0; i < nums.size(); i++) {
            pq.push(nums[i]);
        }

        int curr = 1, maxCount = 1, prev = pq.top();
        pq.pop();
        while(!pq.empty()) {
            int temp = pq.top();
            pq.pop();
            if(temp == prev + 1) {
                curr++;
            } else if(temp == prev) {
                continue;
            } else {
                curr = 1;
            }
            prev = temp;
            maxCount = max(curr, maxCount);
        }

        return maxCount;
    }
};