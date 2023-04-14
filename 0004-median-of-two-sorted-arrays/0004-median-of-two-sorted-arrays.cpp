class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int size1 = nums1.size(), size2 = nums2.size();
        if(size1 > size2) return findMedianSortedArrays(nums2, nums1);
        
        int low = 0, high = size1;
        
        while(low <= high) {
            int partition1 = (high + low) / 2;
            int partition2 = (size1 + size2 + 1) / 2 - partition1;
            
            int nums1Left = partition1 == 0 ? INT_MIN : nums1[partition1 - 1];
            int nums1Right = partition1 == size1 ? INT_MAX : nums1[partition1];
            int nums2Left = partition2 == 0 ? INT_MIN : nums2[partition2 - 1];
            int nums2Right = partition2 == size2 ? INT_MAX : nums2[partition2];
            
            if(nums1Left <= nums2Right && nums2Left <= nums1Right) {
                if((size1 + size2) % 2) {
                    return (double) max(nums1Left, nums2Left);
                }
                
                return (double) (max(nums1Left, nums2Left) + min(nums1Right, nums2Right)) / 2;
            } else if(nums1Left > nums2Right) {
                high = partition1 - 1;
            } else {
                low = partition1 + 1;
            }
        }
        
        return -1;
    }
};