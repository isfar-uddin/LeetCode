class Solution {
public:
    struct PairHash {
        template <typename T1, typename T2>
        std::size_t operator()(const std::pair<T1, T2>& p) const {
            auto hash1 = std::hash<T1>{}(p.first);
            auto hash2 = std::hash<T2>{}(p.second);
            return hash1 ^ hash2;
        }
    };
    
    bool isPathCrossing(string path) {
        unordered_set<pair<int, int>, PairHash> pathSet;
        int x = 0, y = 0;
        
        pathSet.insert(make_pair(x, y));
        
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
            
            if(pathSet.find(make_pair(x, y)) != pathSet.end()) {
                return true;
            } else {
                pathSet.insert(make_pair(x, y));
            }
        }
        
        return false;
    }
};