class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        vector<int>starts, ends;
        for(vector<int> interval: intervals) {
            starts.push_back(interval[0]);
            ends.push_back(interval[1]);
        }
        sort(starts.begin(), starts.end());
        sort(ends.begin(), ends.end());
        int i = 0, j = 0, count = 0;
        int maxRoom = 0;
        while(i < starts.size() and j < ends.size()) {
            if(starts[i] < ends[j]) {
                count++;
                i++;
            } else {
                count--;
                j++;
            }
            maxRoom = max(maxRoom, count);
        }
        return maxRoom;
    }
};