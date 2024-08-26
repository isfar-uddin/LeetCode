class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int length = arr.size(), maxRight = -1;
        
        for(int i = length - 1; i >= 0; i--) {
            int curr = arr[i];
            arr[i] = maxRight;
            if(curr > maxRight) {
                maxRight = curr;
            }
        }
        
        return arr;
    }
};