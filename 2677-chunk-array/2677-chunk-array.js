/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const chunkArr = [];
    let tempArr = [];
    let i = 1;
    for(i = 1; i <= arr.length; i++) {
        tempArr.push(arr[i - 1]);
        if(i % size === 0) {
            chunkArr.push(tempArr);
            tempArr = [];
        }
    }
    
    if((i - 1) % size !== 0) {
        chunkArr.push(tempArr);
    }
    
    return chunkArr;
};
