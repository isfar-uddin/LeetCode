class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> pq;
        for(int i = 0; i < stones.size(); i++) {
            pq.push(stones[i]);
        }
        int secondItem, firstItem;
        while(pq.size() > 1) {
            firstItem = pq.top();
            pq.pop();
            if(!pq.empty()) {
                secondItem = pq.top();
                pq.pop();
            }
            if(firstItem - secondItem) {
                pq.push(firstItem - secondItem);
            }
        }
        return !pq.size() ? 0 : pq.top();
    }
};