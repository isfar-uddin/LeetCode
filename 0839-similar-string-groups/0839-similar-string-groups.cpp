class Solution {
public:
    int numSimilarGroups(vector<string>& strs) {
        int n = strs.size(), count = 0;
        vector<vector<int>> adj(n);
        vector<bool> visited(n);
        
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                if(isSimiliar(strs[i], strs[j])) {
                    adj[i].push_back(j);
                    adj[j].push_back(i);
                }
            }
        }
        
        for(int i = 0; i < n; i++) {
            if(!visited[i]) {
                dfs(i, adj, visited);
                count++;
            }
        }
        return count;
    }
    
    bool isSimiliar(string& str1, string& str2) {
        int count = 0;
        for(int i = 0; i < str1.size(); i++) {
            if(str1[i] != str2[i]) {
                count++;
            }
        }
        return count == 0 || count == 2;
    }
    
    void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited) {
        visited[node] = true;
        for(int i = 0; i < adj[node].size(); i++) {
            if(!visited[adj[node][i]]) {
                dfs(adj[node][i], adj, visited);
            }
        }
    }
};