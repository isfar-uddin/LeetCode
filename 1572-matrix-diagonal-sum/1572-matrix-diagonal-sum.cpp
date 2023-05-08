class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int size = mat.size(), sum = 0;
        for(int i = 0, j = size - 1; i < size, j >= 0; i++, j--) {
            sum += mat[i][i];
            if(i != j) {
                sum += mat[j][i];
            }
        }
        return sum;
    }
};