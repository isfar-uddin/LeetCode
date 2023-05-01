class Solution {
public:
    double average(vector<int>& salary) {
        int minSalary = INT_MAX, maxSalary = 0, totalSalary = 0;
        for(int i = 0; i < salary.size(); i++) {
            minSalary = min(minSalary, salary[i]);
            maxSalary = max(maxSalary, salary[i]);
            totalSalary += salary[i];
        }
        return (double)(totalSalary - minSalary - maxSalary) / (salary.size() - 2);
    }
};