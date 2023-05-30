class MyHashSet {
public:
    unordered_map<int,int> cache;
    
    MyHashSet() {
        
    }
    
    void add(int key) {
        cache[key] = key;
    }
    
    void remove(int key) {
        cache.erase(key);
    }
    
    bool contains(int key) {
        return cache.find(key) != cache.end();
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */