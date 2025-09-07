/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.limit = k;
  this.minHeap = new MinPriorityQueue();

  for (const num of nums) {
    this.add(num);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minHeap.size() < this.limit) {
    this.minHeap.enqueue(val);
  } else if (this.minHeap.front() < val) {
    this.minHeap.dequeue();
    this.minHeap.enqueue(val);
  }
  return this.minHeap.front();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */