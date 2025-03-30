class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        map<int, int> myMap;
        for(int i = 0; i < nums.size(); i++) {
            if(myMap.contains(nums[i])) {
                return true;
            } else {
                myMap[nums[i]] = true;
            }
        }

        return false;
    }
};