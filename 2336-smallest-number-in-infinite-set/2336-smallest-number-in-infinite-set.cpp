class SmallestInfiniteSet {
public:
    unordered_set<int> numSet;
    priority_queue<int, vector<int>, greater<int>> pq; 
    SmallestInfiniteSet() {
        for(int i = 1; i <= 1000; i++) {
            pq.push(i);
            numSet.insert(i);
        }
    }
    
    int popSmallest() {
        int num = pq.top();
        pq.pop();
        numSet.erase(num);
        return num;
    }
    
    void addBack(int num) {
        if(numSet.find(num) == numSet.end()) {
            pq.push(num);
            numSet.insert(num);
        }
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */