class Solution {
public:
    unordered_map<string,vector<pair<string, double>>> graph;
    
    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
        for(int i = 0; i < equations.size(); i++) {
            graph[equations[i][0]].push_back({equations[i][1], values[i]});
            graph[equations[i][1]].push_back({equations[i][0], 1 / values[i]});
        }
        
        vector<double> ans;
        
        for(int i = 0; i < queries.size(); i++) {
            unordered_set<string> visited;
            ans.push_back(dfs(queries[i][0], queries[i][1], visited));
        }
        
        return ans;
    }
    
    double dfs(string src, string destination, unordered_set<string>& visited) {
        if(graph.find(src) == graph.end()) return -1;
        
        if(src == destination) return 1;
        
        for(auto node : graph[src]) {
            if(visited.count(node.first)) continue;
            
            visited.insert(node.first);
            
            double distance = dfs(node.first, destination, visited);
            
            if(distance != -1) return distance * node.second;
        }
        
        return -1;
    }
};