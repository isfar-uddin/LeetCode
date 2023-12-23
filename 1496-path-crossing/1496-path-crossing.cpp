class Solution {
public:
    bool isPathCrossing(string path) {
        unordered_set<string> pathSet;
        int x = 0, y = 0;
        
        pathSet.insert("0,0");
        
        for(int i = 0; i < path.size(); i++) {
            
            if(path[i] == 'N') {
                y++;
            } else if(path[i] == 'S') {
                y--;
            } else if(path[i] == 'E') {
                x++;
            } else if(path[i] == 'W') {
                x--;
            }
            string pathStr = to_string(x) + ',' + to_string(y);
            
            if(pathSet.find(pathStr) != pathSet.end()) {
                return true;
            } else {
                pathSet.insert(pathStr);
            }
        }
        
        return false;
    }
};