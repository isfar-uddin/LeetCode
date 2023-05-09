class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int rowSize = matrix.size();
        int colSize = matrix[0].size();
        int left = 0, right = colSize - 1, up = 0, down = rowSize  - 1;
        vector<int> ans;
        
        while(ans.size() < rowSize * colSize) {
            for(int i = left; i <= right; i++) {
                ans.push_back(matrix[up][i]);
            }
            
            up++;
            
            for(int i = up; i <= down; i++) {
                ans.push_back(matrix[i][right]);
            }
            
            right--;
            
            if(up <= down) {
                for(int i = right; i >= left; i--) {
                    ans.push_back(matrix[down][i]);
                }
                down--;
            }
            
            
            if(left <= right) {
                for(int i = down; i >= up; i--) {
                    ans.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        
        return ans;
    }
};