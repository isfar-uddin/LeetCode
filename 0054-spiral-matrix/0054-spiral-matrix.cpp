class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int rowSize = matrix.size();
        int colSize = matrix[0].size();
        int left = 0, right = colSize - 1, up = 0, down = rowSize  - 1;
        vector<int> ans;
        vector<vector<int>> visited(rowSize, vector<int>(colSize, 0));
        int row = 0, col = 0;
        
        while(ans.size() < rowSize * colSize) {
            for(int i = left; i <= right; i++) {
                if(visited[row][i]) continue;
                ans.push_back(matrix[row][i]);
                visited[row][i] = 1;
            }
            
            up++;
            col = right;
            
            for(int i = up; i <= down; i++) {
                if(visited[i][col]) continue;
                ans.push_back(matrix[i][col]);
                visited[i][col] = 1;
            }
            
            right--;
            row = down;
            
            for(int i = right; i >= left; i--) {
                if(visited[row][i]) continue;
                ans.push_back(matrix[row][i]);
                visited[row][i] = 1;
            }
            
            down--;
            col = left;
            
            for(int i = down; i >= up; i--) {
                if(visited[i][col]) continue;
                ans.push_back(matrix[i][col]);
                visited[i][col] = 1;
            }
            left++;
            row = up;
        }
        
        return ans;
    }
};